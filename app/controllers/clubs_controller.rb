# frozen_string_literal: true

#
# Controller for all actions concerning club data.
#
class ClubsController < ApplicationController
  ADULT_LABELS = { 'm00' => 'Herren', 'w00' => 'Damen' }.freeze

  def index
    @clubs = []
    return unless params[:commit]

    quarter = current_quarter
    counts = Ranking.where(date: quarter, age_group: %w[overall m00 w00])
                    .where('LOWER(club) LIKE LOWER(?)', "%#{params[:club]}%")
                    .group(:club, :age_group)
                    .count

    by_club = counts.each_with_object(Hash.new { |h, k| h[k] = {} }) do |((club, ag), count), h|
      h[club][ag] = count
    end

    @clubs = by_club.map do |name, ag_counts|
      { name: name,
        youth_count: ag_counts['overall'].to_i,
        adult_count: ag_counts.values_at('m00', 'w00').sum(&:to_i) }
    end
    @clubs.sort_by! { |c| c[:name] }
  end

  def show
    quarter = current_quarter
    youth = Ranking.where(date: quarter, age_group: 'overall')
                   .where('LOWER(club) = LOWER(?)', params[:id])
                   .order(:lastname)
    player_ranking = {}
    %w[m00 w00].each do |ag|
      adults = Ranking.where(date: quarter, age_group: ag)
                      .where('LOWER(club) = LOWER(?)', params[:id])
                      .order(:ranking_position)
      next if adults.empty?

      player_ranking[ADULT_LABELS[ag]] = adults.map { |p| adult_player_data(p) }
    end
    player_ranking.merge!(fill_club_info(youth, quarter))
    @players = player_ranking
  end

  private

  def current_quarter
    Ranking.select(:date)
           .order(date: :desc)
           .distinct
           .first
           .date
  end

  def fill_club_info(players, quarter)
    return {} if players.empty?

    dtb_ids = players.map(&:dtb_id)
    overall = Ranking.where(dtb_id: dtb_ids, age_group: 'overall', date: quarter)
                     .index_by(&:dtb_id)
    age_group_rankings = Ranking.where(dtb_id: dtb_ids, date: quarter,
                                       yob_ranking: false, age_group_ranking: true,
                                       year_end_ranking: false)
                                .index_by(&:dtb_id)

    grouped = players.each_with_object(Hash.new { |h, k| h[k] = [] }) do |player, h|
      data = youth_player_data(player, overall, age_group_rankings)
      h[data[:age]] << data if data
    end

    %w[U12 U14 U16 U18].each_with_object({}) do |age, result|
      result[age] = grouped[age].sort_by { |p| p[:rank] } if grouped[age].any?
    end
  end

  def youth_player_data(player, overall, age_group_rankings)
    ranking = overall[player.dtb_id]
    age_group = age_group_rankings[player.dtb_id]&.age_group
    return nil unless ranking && age_group

    { dtb_id: player.dtb_id,
      lastname: player.lastname,
      firstname: player.firstname,
      score: ranking.score,
      rank: ranking.ranking_position,
      age: age_group }
  end

  def adult_player_data(player)
    { dtb_id: player.dtb_id, lastname: player.lastname,
      firstname: player.firstname, score: player.score,
      rank: player.ranking_position, age: player.age_group }
  end
end
