# frozen_string_literal: true

#
# Controller covering all actions concerning the ranking list.
#
class ListingController < ApplicationController
  def index
    @quarters = fetch_available_quarters
    @federations = federations

    return unless params[:commit]

    @rankings = Ranking.where(date: params[:quarter])
                       .where(gender_selected(params[:gender]))
                       .where(age_group_selected(params[:age_group]))
                       .where(age_group_options(params[:age_group][1, 2].to_i, params[:age_group_options]))
                       .where(federation_selected(params[:federation]))
                       .where(club_selected(params[:club]))
                       .where(year_end_rankings(params[:year_end], params[:quarter]))
                       .order(:ranking_position, score: :desc)
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
    if gender.eql?('Junioren')
    then '(dtb_id >= 10000000 AND dtb_id <= 19999999)'
    else
      '(dtb_id >= 20000000 AND dtb_id <= 29999999)'
    end
  end

  def age_group_selected(age_group)
    ['age_group = ?', age_group.presence || 'overall']
  end

  def age_group_options(age_group, age_group_options)
    if age_group_options.eql?('') && age_group.even?
    then 'yob_ranking=false AND age_group_ranking=true'
    elsif age_group_options.eql?('') && age_group.odd?
    then 'yob_ranking=true AND age_group_ranking=false'
    elsif age_group_options.eql?('only_yob')
    then 'yob_ranking=true AND age_group_ranking=false'
    elsif age_group_options.eql?('include_younger')
    then 'yob_ranking=false AND age_group_ranking=false'
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
end
