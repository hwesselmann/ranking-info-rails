# frozen_string_literal: true

require 'csv'

#
# a model for a ranking - the main item of this software
# this model includes some class methods to import new rankings
#
class Ranking < ApplicationRecord
  GENDER_FACTORS = { junioren: 100, juniorinnen: 200 }.freeze
  AGE_GROUP_MAP = { herren: 'm00', damen: 'w00', junioren: 'overall', juniorinnen: 'overall' }.freeze

  class DuplicateImportError < StandardError; end

  def self.import_rankings(file)
    start_ms = Process.clock_gettime(Process::CLOCK_MONOTONIC, :millisecond)
    period = extract_period_from_filename(file)
    category = file_category_from_filename(file)
    if ImportHistory.exists?(category: category.to_s.capitalize, period: period)
      raise DuplicateImportError, "rankings for '#{category}' / #{period} have already been imported"
    end

    store_rankings_from_csv(file, period, AGE_GROUP_MAP[category])
    calculate_rankings(period, GENDER_FACTORS[category]) if GENDER_FACTORS.key?(category)
    ImportHistory.create!(
      filename: File.basename(file),
      category: category.to_s.capitalize,
      period: period,
      imported_at: Time.current
    )
    elapsed_ms = Process.clock_gettime(Process::CLOCK_MONOTONIC, :millisecond) - start_ms
    logger.info "import of '#{File.basename(file)}' completed in #{elapsed_ms}ms"
  end

  #
  # Extract the period the import file is for from the filename.
  #
  # @param [String] filename filename to extract period from
  #
  # @return [Date] Ruby Date object containing the extracted period
  #
  def self.extract_period_from_filename(filename)
    logger.debug "extracting period part from file '#{filename}'"
    parts = File.basename(filename, '.*').split('_')
    if parts.size >= 2
      Date.strptime(parts.last, '%Y%m%d')
    else
      logger.error "could not retrieve period part from filename '#{filename}'"
      raise "could not retrieve period part from filename '#{filename}'"
    end
  end

  #
  # Get a range of years of birth to retrieve for ranking calculation.
  #
  # @param [String] yob youngest year of birth as 4-digit string
  # @param [Integer] age_group to fetch
  # @param [Date] period to calculate
  # @param [Integer] gender_factor dtb-id prefix offset
  #
  # @return [Array] array containing range to fetch for calculation of rankings
  #
  def self.yob_range_to_fetch(yob, age_group, period, gender_factor)
    classes = []
    yob_gender_marker = yob[2, 4].to_i + gender_factor
    i = 0
    while age_group >= period.year - yob.to_i + i
      classes.push(yob_gender_marker - i)
      i += 1
    end
    classes
  end

  private_class_method def self.file_category_from_filename(filename)
    logger.debug "extracting category from file '#{filename}'"
    prefix = File.basename(filename, '.*').split('_').first
    case prefix
    when 'Junioren'    then :junioren
    when 'Juniorinnen' then :juniorinnen
    when 'Herren'      then :herren
    when 'Damen'       then :damen
    else raise "Unknown file category in filename '#{filename}'"
    end
  end

  private_class_method def self.store_rankings_from_csv(file, period, age_group)
    CSV.foreach(file, encoding: 'utf-8') do |entry|
      save_ranking(entry, period, age_group)
    end
  end

  private_class_method def self.save_ranking(entry, period, age_group)
    Ranking.create(
      dtb_id: entry[4].split.first.to_i,
      age_group: age_group,
      date: period,
      ranking_position: entry[0].to_i,
      lastname: entry[1],
      firstname: entry[2],
      nationality: entry[3] || 'nil',
      score: entry[6],
      age_group_ranking: false,
      yob_ranking: false,
      year_end_ranking: false,
      club: entry[5],
      federation: entry[4].split.last
    )
  end

  #
  # Calculate rankings for this period for all age groups and save to datastore.
  #
  # @param [Date] period to calculate a full set of rankings for
  # @param [Integer] gender gender factor for dtb-id prefix
  #
  private_class_method def self.calculate_rankings(period, gender)
    yob_youngest = (period.year - 11).to_s

    # general and yob rankings for all age groups combined in one pass
    (11..18).each do |age_group|
      yobs_general = yob_range_to_fetch(yob_youngest, age_group, period, gender)
      rankings_for_age_range_in_period(yobs_general.sort, period, age_group, false, false, false)

      yob_single = [(period.year - age_group).to_s[2, 4].to_i + gender]
      rankings_for_age_range_in_period(yob_single, period, age_group, true, false, false)
    end

    # official age group rankings (U12, U14, U16, U18 only)
    [12, 14, 16, 18].each do |age_group|
      yobs = [(period.year - age_group).to_s[2, 4].to_i + gender,
              (period.year - age_group).to_s[2, 4].to_i + gender + 1]
      rankings_for_age_range_in_period(yobs.sort, period, age_group, false, true, false)
    end

    # year-end rankings are only created for the last quarter (date falls in January of new year)
    return unless period.month == 1

    ye_date = period - 1.day
    [12, 14, 16, 18].each do |age_group|
      yobs = [(ye_date.year - age_group).to_s[2, 4].to_i + gender,
              (ye_date.year - age_group).to_s[2, 4].to_i + gender + 1]
      rankings_for_age_range_in_period(yobs.sort, period, age_group, false, true, true)
    end
  end

  private_class_method def self.rankings_for_age_range_in_period(classes_to_retrieve, period, age_group,
                                                                 is_yob_ranking, is_age_group_ranking,
                                                                 year_end_ranking)
    id_start = classes_to_retrieve.first * 100_000
    id_end   = (classes_to_retrieve.last * 100_000) + 99_999
    rankings_from_db = load_ranking_for_age_range(id_start, id_end, period)

    last_rank = 0
    start_ranking = 0
    count_up = 1
    now = Time.current
    records = []

    rankings_from_db.each do |curr|
      if curr.ranking_position > last_rank
        last_rank = curr.ranking_position
        start_ranking = count_up
      end

      records << {
        age_group: "U#{age_group}",
        date: curr.date,
        yob_ranking: is_yob_ranking,
        age_group_ranking: is_age_group_ranking,
        year_end_ranking: year_end_ranking,
        ranking_position: start_ranking,
        dtb_id: curr.dtb_id,
        lastname: curr.lastname,
        firstname: curr.firstname,
        nationality: curr.nationality,
        club: curr.club,
        federation: curr.federation,
        score: curr.score,
        created_at: now,
        updated_at: now
      }

      # foreign players and players with PR/Einst. score do not advance the position counter
      count_up += 1 if curr.nationality == 'GER' && !%w[0,0 PR Einst.].include?(curr.score)
    end

    Ranking.insert_all(records) if records.any?
  end

  private_class_method def self.load_ranking_for_age_range(dtb_id_start, dtb_id_end, period)
    Ranking.where(date: period, dtb_id: dtb_id_start..dtb_id_end, age_group: 'overall')
           .order(:ranking_position, dtb_id: :desc)
  end
end
