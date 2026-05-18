# frozen_string_literal: true

#
# Controller covering all actions concerning the ranking list.
#
class ListingController < ApplicationController
  include RankingFilters

  def index
    @quarters = Rails.cache.fetch("available_quarters", expires_in: 1.hour) { fetch_available_quarters }
    @federations = Rails.cache.fetch("federations", expires_in: 1.hour) { federations }

    return unless params[:commit]

    gender = ui_gender_to_internal(params[:gender])
    age_group = ui_age_group_to_internal(params[:age_group], params[:gender])

    # Build the base query with all filters
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

    # Single query for previous positions using a subquery
    @previous_positions = fetch_previous_positions(@rankings, params, gender, age_group)
  end

  private

  def fetch_available_quarters
    # Optimized: Use direct SQL queries instead of loading all records
    # Get distinct years from dates
    all_dates = Ranking.select(:date).where("date < ?", Date.current).order(date: :desc).distinct
    
    years = {}
    all_dates.each do |r|
      year = (r.date - 1.day).year.to_s
      years[year] ||= []
      # do not show year end ranking dates - they are triggered via checkbox
      unless r.date.month.eql?(12) && r.date.day.eql?(31)
        years[year].push([(r.date - 1.day).strftime('%d.%m.%Y'), r.date.strftime('%Y-%m-%d')])
      end
    end
    
    # Sort years in descending order
    years.sort_by { |y, _| -y.to_i }.to_h
  end

  def federations
    Ranking.select(:federation).order(:federation).distinct.pluck(:federation)
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

  def fetch_previous_positions(rankings, params, gender, age_group)
    return nil if rankings.empty?

    prev_date_subquery = Ranking.select(:date)
                                .where('date < ?', params[:quarter])
                                .order(date: :desc)
                                .distinct
                                .limit(1)

    dtb_ids = rankings.reselect(:dtb_id)

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
