# frozen_string_literal: true

#
# Controller covering all actions concerning the ranking list.
#
class ListingController < ApplicationController
  AGE_GROUP_OPTION_FILTERS = {
    'only_yob' => 'yob_ranking=true AND age_group_ranking=false',
    'include_younger' => 'yob_ranking=false AND age_group_ranking=false'
  }.freeze

  def index
    @quarters = fetch_available_quarters
    @federations = federations

    return unless params[:commit]

    @rankings = Ranking.where(date: params[:quarter])
                       .where(gender_selected(params[:gender]))
                       .where(age_group_selected(params[:age_group], params[:gender]))
                       .where(age_group_options(age_group_as_int(params[:age_group]), params[:age_group_options],
                                                params[:gender]))
                       .where(federation_selected(params[:federation]))
                       .where(club_selected(params[:club]))
                       .where(year_end_rankings(params[:year_end], params[:quarter]))
                       .select(:dtb_id, :ranking_position, :lastname, :firstname, :nationality, :club, :federation,
                               :score)
                       .order(:ranking_position, score: :desc)

    @previous_positions = previous_positions(@rankings, params)
  end

  private

  def fetch_available_quarters
    available_rankings = Ranking.select(:date).order(date: :desc).distinct
    years = available_years(available_rankings)
    quarters = {}
    years.each do |y|
      quarters[y] = available_quarters_for_year(y, available_rankings)
    end
    quarters
  end

  def available_years(rankings)
    years = []
    rankings.each do |r|
      years.push((r.date - 1.day).year.to_s) unless r.date.month.eql?(12)
    end
    years
  end

  def available_quarters_for_year(year, rankings)
    quarters = []
    rankings.each do |r|
      next unless year.eql?((r.date - 1.day).year.to_s)

      # do not show year end ranking dates - they are triggered via checkbox
      unless r.date.month.eql?(12) && r.date.day.eql?(31)
        quarters.push([(r.date - 1.day).strftime('%d.%m.%Y'),
                       r.date.strftime('%Y-%m-%d')])
      end
    end
    quarters
  end

  def federations
    federations = []
    rankings = Ranking.select(:federation).order(:federation).distinct
    rankings.each do |ranking|
      federations.push ranking.federation
    end
    federations
  end

  def gender_selected(gender)
    case gender
    when 'Junioren', 'Herren' then '(dtb_id >= 10000000 AND dtb_id <= 19999999)'
    else '(dtb_id >= 20000000 AND dtb_id <= 29999999)'
    end
  end

  def age_group_selected(age_group, gender)
    case gender
    when 'Herren' then ['age_group = ?', 'm00']
    when 'Damen'  then ['age_group = ?', 'w00']
    else ['age_group = ?', age_group.presence || 'overall']
    end
  end

  def age_group_options(age_group, age_group_options, gender)
    return 'yob_ranking=false AND age_group_ranking=false' if %w[Herren Damen].include?(gender)
    return default_age_group_filter(age_group) if age_group_options.eql?('')

    AGE_GROUP_OPTION_FILTERS[age_group_options]
  end

  def default_age_group_filter(age_group)
    if age_group.even?
      'yob_ranking=false AND age_group_ranking=true'
    else
      'yob_ranking=true AND age_group_ranking=false'
    end
  end

  def federation_selected(federation)
    return nil if federation.eql?('')

    ['federation = ?', federation]
  end

  def club_selected(club)
    return nil if club.eql?('')

    ['LOWER(club) LIKE LOWER(?)', "%#{club}%"]
  end

  def year_end_rankings(year_end, quarter)
    if year_end.eql?('1') && first_quarter?(quarter)
    then 'year_end_ranking=true'
    else
      'year_end_ranking=false'
    end
  end

  def first_quarter?(quarter)
    quarter.split('-')[1].eql?('01')
  end

  def previous_positions(current_rankings, params)
    prev_date_subquery = Ranking.select(:date)
                                .where('date < ?', params[:quarter])
                                .order(date: :desc)
                                .distinct
                                .limit(1)

    Ranking.where(date: prev_date_subquery)
           .where(dtb_id: current_rankings.select(:dtb_id))
           .where(age_group_selected(params[:age_group], params[:gender]))
           .where(age_group_options(age_group_as_int(params[:age_group]), params[:age_group_options], params[:gender]))
           .where(year_end_rankings(params[:year_end], params[:quarter]))
           .select(:dtb_id, :ranking_position)
           .to_h { |r| [r.dtb_id, r.ranking_position] }
           .presence
  end

  def age_group_as_int(age_group_param)
    age_group_param[1, 2].to_i
  end
end
