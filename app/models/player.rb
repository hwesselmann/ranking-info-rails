# frozen_string_literal: true

#
# This class represents a player and provides methods to load player profiles
#  and search for players based on various criteria.
#
class Player
  attr_accessor :dtb_id, :current_ranking, :current_score, :lastname, :firstname, :federation, :club, :nationality,
                :clubs, :rankings

  def self.load_player_profile(dtb_id)
    player = Player.new
    all_rankings = Ranking.where(dtb_id: dtb_id, age_group: 'overall').order(date: :desc)
    current_data = all_rankings.first
    player.dtb_id = dtb_id
    player.lastname = current_data.lastname
    player.firstname = current_data.firstname
    player.nationality = current_data.nationality
    player.club = current_data.club
    player.federation = current_data.federation
    player.clubs = fetch_clubs(all_rankings)
    player
  end

  def self.find_all_players
    deduplicate_by_dtb_id(
      Ranking.select(:dtb_id, :lastname, :firstname, :federation, :club, :nationality, :date)
             .order(:lastname, :dtb_id, date: :desc)
             .distinct
    )
  end

  def self.find_players_by_lastname(lastname)
    deduplicate_by_dtb_id(
      Ranking.select(:dtb_id, :lastname, :firstname, :club, :federation, :nationality, :date)
             .where('LOWER(lastname) LIKE LOWER(?)', "%#{lastname}%")
             .order(:lastname, :dtb_id, date: :desc)
             .distinct
    )
  end

  def self.find_players_by_lastname_and_yob(lastname, yob_male, yob_female)
    deduplicate_by_dtb_id(
      Ranking.select(:dtb_id, :lastname, :firstname, :federation, :club, :nationality)
             .where(
               'LOWER(lastname) LIKE LOWER(?) AND ((dtb_id >= ? AND dtb_id <= ?) OR (dtb_id >= ? AND dtb_id <= ?))',
               "%#{lastname}%",
               yob_male * 100_000, (yob_male * 100_000) + 99_999,
               yob_female * 100_000, (yob_female * 100_000) + 99_999
             )
             .order(:lastname, :dtb_id, date: :desc)
             .distinct
    )
  end

  def self.find_players_by_dtb_id(dtb_id_start, dtb_id_end)
    deduplicate_by_dtb_id(
      Ranking.select(:dtb_id, :lastname, :firstname, :federation, :club, :nationality)
             .where('dtb_id >= ? AND dtb_id <= ?', dtb_id_start, dtb_id_end)
             .order(:lastname, :dtb_id, date: :desc)
             .distinct
    )
  end

  def self.find_players_by_yob(yob_male, yob_female)
    deduplicate_by_dtb_id(
      Ranking.select(:dtb_id, :lastname, :firstname, :federation, :club, :nationality)
             .where(
               '(dtb_id >= ? AND dtb_id <= ?) OR (dtb_id >= ? AND dtb_id <= ?)',
               yob_male * 100_000, (yob_male * 100_000) + 99_999,
               yob_female * 100_000, (yob_female * 100_000) + 99_999
             )
             .order(:lastname, :dtb_id, date: :desc)
             .distinct
    )
  end

  class << self
    private

    def fetch_clubs(rankings)
      last_club = nil
      rankings.each_with_object([]) do |item, clubs|
        next if item.club == last_club

        clubs << Club.new(item.club, item.federation)
        last_club = item.club
      end
    end

    def deduplicate_by_dtb_id(scope)
      scope.each_with_object([]) do |player, result|
        result << player unless result.last&.dtb_id == player.dtb_id
      end
    end
  end
end
