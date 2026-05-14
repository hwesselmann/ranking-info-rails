# frozen_string_literal: true

module Api
  module V1
    # Provides player search and detail endpoints.
    #
    # Routes:
    #   GET /api/v1/players?lastname=...&yob=...   — search by lastname (+ optional year of birth)
    #   GET /api/v1/players/:id                    — player detail with full ranking history
    class PlayersController < Api::V1::BaseController
      def index
        return render json: { error: 'lastname parameter required' }, status: :bad_request if params[:lastname].blank?

        players = search_players
        return render json: { error: 'Not Found' }, status: :not_found if players.empty?

        render json: {
          request: search_request_block(players.size),
          data: players.map { |p| serialize_player_summary(p) }
        }
      end

      def show
        rankings = Ranking.where(dtb_id: params[:id], yob_ranking: false, age_group_ranking: false,
                                 year_end_ranking: false)
                          .order(date: :desc, age_group: :asc)
        return render json: { error: 'Not Found' }, status: :not_found if rankings.empty?

        current = rankings.first
        render json: { data: player_data(current, rankings) }
      end

      private

      def search_players
        if params[:yob].present?
          yob_male = params[:yob].to_s[2, 4].to_i + 100
          Player.find_players_by_lastname_and_yob(params[:lastname], yob_male, yob_male + 100)
        else
          Player.find_players_by_lastname(params[:lastname])
        end
      end

      def player_data(current, rankings)
        {
          dtb_id: current.dtb_id,
          lastname: current.lastname,
          firstname: current.firstname,
          nationality: current.nationality,
          club: current.club,
          federation: current.federation,
          rankings: rankings.map { |r| serialize_ranking_history_entry(r) }
        }
      end

      def serialize_player_summary(player)
        {
          dtb_id: player.dtb_id,
          lastname: player.lastname,
          firstname: player.firstname,
          club: player.club,
          links: { self: api_v1_player_url(player.dtb_id) }
        }
      end

      def search_request_block(total_count)
        { lastname: params[:lastname], yob: params[:yob].presence, total_count: total_count }
      end

      def serialize_ranking_history_entry(ranking)
        {
          quarter: ranking.date,
          age_group: ranking.age_group,
          ranking_position: ranking.ranking_position,
          score: ranking.score
        }
      end
    end
  end
end
