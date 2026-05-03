# frozen_string_literal: true

#
# Controller for federation data view.
#
class FederationsController < ApplicationController
  def index
    @federations = {}
    quarter = current_quarter
    return @federations if quarter.nil?

    quarter = quarter.date
    male_count = player_count_by_federation(quarter, 'm')
    female_count = player_count_by_federation(quarter, 'w')

    federations = {}
    age_groups = {}
    curr_fed = ''
    # male counts
    male_count.each do |entry|
      unless entry['federation'].eql?(curr_fed)
        federations[curr_fed] = age_groups unless curr_fed.eql?('')
        age_groups = {}
        curr_fed = entry['federation']
      end
      age_group = "#{entry['age_group']}m"
      age_groups[age_group] = entry['count']
    end
    federations[curr_fed] = age_groups

    # female counts
    age_groups = {}
    female_count.each do |entry|
      age_group = "#{entry['age_group']}w"
      federations[entry['federation']][age_group] = entry['count']
    end

    # active (Herren/Damen) counts
    active_count_by_federation(quarter, 'm00').each do |entry|
      federations[entry['federation']]['m00'] = entry['count'] if federations[entry['federation']]
    end
    active_count_by_federation(quarter, 'w00').each do |entry|
      federations[entry['federation']]['w00'] = entry['count'] if federations[entry['federation']]
    end

    @federations = federations
  end

  def current_quarter
    Ranking.select(:date).order(date: :desc)
           .distinct.first
  end

  def active_count_by_federation(quarter, age_group)
    Ranking.find_by_sql([
                          'SELECT COUNT(dtb_id) AS count, federation FROM rankings
       WHERE date=? AND age_group=?
       GROUP BY federation;',
                          quarter, age_group
                        ])
  end

  def player_count_by_federation(quarter, gender)
    dtb_id = if gender.eql?('m') then 10_000_000
             else 20_000_000
             end
    Ranking.find_by_sql([
                          "SELECT COUNT(dtb_id) AS count, federation, age_group FROM rankings
       WHERE date=? AND dtb_id >= ? AND dtb_id < ?
       AND yob_ranking=false AND age_group_ranking=true AND year_end_ranking=false
       GROUP BY federation, age_group;",
                          quarter, dtb_id, dtb_id + 10_000_000
                        ])
  end
end
