# frozen_string_literal: true

#
# Controller for all actions concerning club data.
#
class ClubsController < ApplicationController
  def index
    clubs = []
    if params[:commit]
      quarter = current_quarter
      player_clubs = find_all_clubs(quarter, params[:club])
      player_clubs.each do |c|
        youth_count = count_players_for_club(quarter, c.club, 'overall')
        adult_count = count_players_for_club(quarter, c.club, %w[m00 w00])
        clubs.push({ name: c.club, youth_count: youth_count, adult_count: adult_count })
      end
    end
    @clubs = clubs
  end

  def show
    quarter = current_quarter
    youth = Ranking.where("date=? AND age_group='overall' AND LOWER(club)=LOWER(?)", quarter, params[:id])
                   .order(:lastname)
    player_ranking = {}
    %w[m00 w00].each do |ag|
      adults = Ranking.where(date: quarter, age_group: ag)
                      .where('LOWER(club)=LOWER(?)', params[:id])
                      .order(:ranking_position)
      next if adults.empty?

      label = ag == 'm00' ? 'Herren' : 'Damen'
      player_ranking[label] = adults.map { |p| adult_player_data(p) }
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

  def find_all_clubs(quarter, club)
    Ranking.select(:club)
           .where('date=? AND LOWER(club) LIKE LOWER(?)', quarter, "%#{club}%")
           .order(:club)
           .distinct
  end

  def count_players_for_club(quarter, club, age_group)
    Ranking.where(date: quarter, age_group: age_group, club: club).count
  end

  def fill_club_info(players, quarter)
    player_ranking = {}
    u12_players = []
    u14_players = []
    u16_players = []
    u18_players = []
    players.each do |player|
      player_data = fetch_basic_player_data(player, quarter)

      case player_data[:age]
      when 'U12'
        u12_players.push(player_data)
      when 'U14'
        u14_players.push(player_data)
      when 'U16'
        u16_players.push(player_data)
      when 'U18'
        u18_players.push(player_data)
      end
    end
    player_ranking['U12'] = u12_players.sort_by { |p| p[:rank] } unless u12_players.empty?
    player_ranking['U14'] = u14_players.sort_by { |p| p[:rank] } unless u14_players.empty?
    player_ranking['U16'] = u16_players.sort_by { |p| p[:rank] } unless u16_players.empty?
    player_ranking['U18'] = u18_players.sort_by { |p| p[:rank] } unless u18_players.empty?

    player_ranking
  end

  def adult_player_data(player)
    { dtb_id: player.dtb_id, lastname: player.lastname,
      firstname: player.firstname, score: player.score,
      rank: player.ranking_position, age: player.age_group }
  end

  def fetch_basic_player_data(player, quarter)
    ranking = Ranking.find_by(dtb_id: player.dtb_id,
                              age_group: 'overall',
                              date: quarter)
    age_group = Ranking.find_by(dtb_id: player.dtb_id, date: quarter,
                                yob_ranking: false, age_group_ranking: true,
                                year_end_ranking: false)
                       .age_group
    { dtb_id: player.dtb_id, lastname: player.lastname,
      firstname: player.firstname, score: ranking.score,
      rank: ranking.ranking_position, age: age_group }
  end
end
