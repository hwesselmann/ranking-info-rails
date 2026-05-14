# frozen_string_literal: true

module Api
  module V1
    # Provides paginated, filterable access to ranking listings.
    #
    # Route: GET /api/v1/listings/:quarter/:age_group_slug
    #
    # Age group slug format: {gender_prefix}{age_group}
    #   m00  → Herren (male, adult)
    #   w00  → Damen (female, adult)
    #   mu18 → Junioren U18 (male, youth)
    #   wu12 → Juniorinnen U12 (female, youth)
    class ListingsController < Api::V1::BaseController
      include RankingFilters

      DEFAULT_PER_PAGE = 25
      MAX_PER_PAGE = 100

      def index
        return unless stale?(etag: listing_etag_key, public: false)

        gender = gender_from_slug(params[:age_group_slug])
        age_group = age_group_from_slug(params[:age_group_slug])
        per_page = capped_per_page

        base = filtered_rankings(gender, age_group)
        rankings = base.page(params[:page]).per(per_page)
        prev_positions = previous_positions(base, params[:quarter], age_group, gender)

        render json: build_response(rankings, prev_positions, per_page)
      end

      private

      def listing_etag_key
        [
          ImportHistory.maximum(:imported_at),
          params[:quarter], params[:age_group_slug], params[:age_group_options],
          params[:federation], params[:club], params[:year_end],
          params[:page], params[:per_page]
        ]
      end

      def gender_from_slug(slug)
        slug.to_s.start_with?('m') ? 'male' : 'female'
      end

      def age_group_from_slug(slug)
        slug = slug.to_s
        return slug if %w[m00 w00].include?(slug)

        # e.g. "mu18" → "U18", "wu12" → "U12"
        slug[1..].upcase
      end

      def capped_per_page
        [params.fetch(:per_page, DEFAULT_PER_PAGE).to_i, MAX_PER_PAGE].min
      end

      def filtered_rankings(gender, age_group)
        Ranking
          .where(date: params[:quarter])
          .where(gender_selected(gender))
          .where(age_group_selected(age_group))
          .where(age_group_options(age_group, params[:age_group_options], gender))
          .where(federation_selected(params[:federation]))
          .where(club_selected(params[:club]))
          .where(year_end_rankings(params[:year_end], params[:quarter]))
          .select(:dtb_id, :ranking_position, :lastname, :firstname, :nationality, :club, :federation, :score)
          .order(:ranking_position, score: :desc)
      end

      def previous_positions(base_rankings, quarter, age_group, gender)
        prev_date = Ranking.select(:date).where('date < ?', quarter).order(date: :desc).distinct.limit(1)
        dtb_ids = base_rankings.reselect(:dtb_id).reorder(nil)

        Ranking.where(date: prev_date)
               .where(dtb_id: dtb_ids)
               .where(age_group_selected(age_group))
               .where(age_group_options(age_group, params[:age_group_options], gender))
               .where(year_end_rankings(params[:year_end], quarter))
               .select(:dtb_id, :ranking_position)
               .to_h { |r| [r.dtb_id, r.ranking_position] }
               .presence || {}
      end

      def build_response(rankings, prev_positions, per_page)
        {
          request: request_block(rankings.total_count, per_page),
          data: rankings.map { |r| serialize_ranking(r, prev_positions) }
        }
      end

      def request_block(total_count, per_page)
        filter_params.merge(page: (params[:page] || 1).to_i, per_page: per_page, total_count: total_count)
      end

      def filter_params
        {
          quarter: params[:quarter],
          age_group: params[:age_group_slug],
          age_group_options: params[:age_group_options].presence,
          federation: params[:federation].presence,
          club: params[:club].presence,
          year_end: params[:year_end].to_s == '1'
        }
      end

      def serialize_ranking(ranking, prev_positions)
        prev_position = prev_positions[ranking.dtb_id]
        position_change = prev_position ? prev_position - ranking.ranking_position : nil
        ranking_attrs(ranking).merge(
          position_change: position_change,
          links: { self: api_v1_player_url(ranking.dtb_id) }
        )
      end

      def ranking_attrs(ranking)
        {
          dtb_id: ranking.dtb_id,
          ranking_position: ranking.ranking_position,
          lastname: ranking.lastname,
          firstname: ranking.firstname,
          nationality: ranking.nationality,
          club: ranking.club,
          federation: ranking.federation,
          score: ranking.score
        }
      end
    end
  end
end
