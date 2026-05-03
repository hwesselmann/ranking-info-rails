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
    @federations = build_youth_federations(quarter)
    add_active_counts(@federations, quarter)
  end

  def build_youth_federations(quarter)
    federations = {}
    player_count_by_federation(quarter, 'm').each do |entry|
      federations[entry['federation']] ||= {}
      federations[entry['federation']]["#{entry['age_group']}m"] = entry['count']
    end
    player_count_by_federation(quarter, 'w').each do |entry|
      federations[entry['federation']] ||= {}
      federations[entry['federation']]["#{entry['age_group']}w"] = entry['count']
    end
    federations
  end

  def add_active_counts(federations, quarter)
    %w[m00 w00].each do |ag|
      active_count_by_federation(quarter, ag).each do |entry|
        federations[entry['federation']][ag] = entry['count'] if federations[entry['federation']]
      end
    end
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
