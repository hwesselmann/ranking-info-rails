# frozen_string_literal: true

#
# Controller for the public status page showing import statistics.
#
class StatusController < ApplicationController
  def info
    @player_male_count = Ranking.select(:dtb_id).where('dtb_id >= 10000000 AND dtb_id < 20000000').distinct.count
    @player_female_count = Ranking.select(:dtb_id).where('dtb_id >= 20000000 AND dtb_id < 30000000').distinct.count
    @ranking_count = Ranking.count
    @available_quarters = helpers.fetch_available_quarters
    @date_last_updated = last_updated_timestamp
  end

  private

  def last_updated_timestamp
    last = Ranking.order(updated_at: :desc).first
    return '' if last.nil?

    last.updated_at.localtime('+02:00').strftime('%d.%m.%Y %H:%M')
  end
end
