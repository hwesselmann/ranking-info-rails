# frozen_string_literal: true

#
# Controller covering all actions concerning the ranking list.
#
class ListingController < ApplicationController
  include RankingFilters

  def index
    @quarters = fetch_available_quarters
    @federations = federations

    return unless params[:commit]

    gender = ui_gender_to_internal(params[:gender])
    age_group = ui_age_group_to_internal(params[:age_group], params[:gender])

    @rankings = Ranking.where(date: params[:quarter])
                       .where(gender_selected(gender))
                       .where(age_group_selected(age_group))
                       .where(age_group_options(age_group, params[:age_group_options], gender))
                       .where(federation_selected(params[:federation]))
                       .where(club_selected(params[:club]))
                       .where(year_end_rankings(params[:year_end], params[:quarter]))
                       .select(:dtb_id, :ranking_position, :lastname, :firstname, :nationality, :club, :federation,
                               :score)
                       .order(:ranking_position, score: :desc)
                       .to_a

    @previous_positions = previous_positions(@rankings.map(&:dtb_id), params, gender, age_group)
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

  def ui_gender_to_internal(gender)
    case gender
    when 'Herren', 'Junioren' then 'male'
    else 'female'
    end
  end

  def ui_age_group_to_internal(age_group, gender)
    case gender
    when 'Herren' then 'm00'
    when 'Damen'  then 'w00'
    else age_group.presence || 'overall'
    end
  end

  def previous_positions(dtb_ids, params, gender, age_group)
    return nil if dtb_ids.empty?

    prev_date_subquery = Ranking.select(:date)
                                .where('date < ?', params[:quarter])
                                .order(date: :desc)
                                .distinct
                                .limit(1)

    Ranking.where(date: prev_date_subquery)
           .where(dtb_id: dtb_ids)
           .where(age_group_selected(age_group))
           .where(age_group_options(age_group, params[:age_group_options], gender))
           .where(year_end_rankings(params[:year_end], params[:quarter]))
           .select(:dtb_id, :ranking_position)
           .to_h { |r| [r.dtb_id, r.ranking_position] }
           .presence
  end
end
