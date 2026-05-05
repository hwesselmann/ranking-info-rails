# frozen_string_literal: true

#
# Controller for federation data view.
#
class FederationsController < ApplicationController
  def index
    @federations = {}
    quarter = current_quarter
    return unless quarter

    @federations = build_youth_federations(quarter)
    add_active_counts(@federations, quarter)
  end

  private

  def current_quarter
    Ranking.select(:date).order(date: :desc).distinct.first&.date
  end

  def build_youth_federations(quarter)
    federations = {}
    %w[m w].each do |gender|
      player_count_by_federation(quarter, gender).each do |(federation, age_group), count|
        federations[federation] ||= {}
        federations[federation]["#{age_group}#{gender}"] = count
      end
    end
    federations
  end

  def add_active_counts(federations, quarter)
    %w[m00 w00].each do |ag|
      active_count_by_federation(quarter, ag).each do |federation, count|
        federations[federation][ag] = count if federations.key?(federation)
      end
    end
  end

  def active_count_by_federation(quarter, age_group)
    Ranking.where(date: quarter, age_group: age_group)
           .group(:federation)
           .count
  end

  def player_count_by_federation(quarter, gender)
    dtb_id_start = gender == 'm' ? 10_000_000 : 20_000_000
    Ranking.where(date: quarter, yob_ranking: false, age_group_ranking: true, year_end_ranking: false)
           .where('dtb_id >= ? AND dtb_id < ?', dtb_id_start, dtb_id_start + 10_000_000)
           .group(:federation, :age_group)
           .count
  end
end
