# frozen_string_literal: true

require 'test_helper'

module Api
  module V1
    class ListingsControllerTest < ActionDispatch::IntegrationTest
      TEST_TOKEN = 'test-api-token'
      AUTH_HEADER = { 'Authorization' => "Bearer #{TEST_TOKEN}" }.freeze
      QUARTER = '2026-04-01'
      PREV_QUARTER = '2025-10-01'

      setup do
        ENV['API_BEARER_TOKEN'] = TEST_TOKEN
        Rails.cache.clear
      end

      teardown do
        ENV.delete('API_BEARER_TOKEN')
        Rails.cache.clear
      end

      # --- Authentication ---

      test 'returns 401 without authorization header' do
        get api_v1_listings_path(quarter: QUARTER, age_group_slug: 'm00')
        assert_response :unauthorized
      end

      test 'returns 401 with wrong token' do
        get api_v1_listings_path(quarter: QUARTER, age_group_slug: 'm00'),
            headers: { 'Authorization' => 'Bearer wrong-token' }
        assert_response :unauthorized
      end

      test 'returns 401 with malformed authorization header' do
        get api_v1_listings_path(quarter: QUARTER, age_group_slug: 'm00'),
            headers: { 'Authorization' => 'NotBearer test-api-token' }
        assert_response :unauthorized
      end

      test 'returns 200 with valid token' do
        get api_v1_listings_path(quarter: QUARTER, age_group_slug: 'm00'), headers: AUTH_HEADER
        assert_response :success
      end

      # --- Response structure ---

      test 'response contains request and data keys' do
        get api_v1_listings_path(quarter: QUARTER, age_group_slug: 'm00'), headers: AUTH_HEADER
        json = response_json
        assert json.key?('request'), 'response must have a request block'
        assert json.key?('data'), 'response must have a data array'
      end

      test 'request block contains all expected fields' do
        get api_v1_listings_path(quarter: QUARTER, age_group_slug: 'm00'), headers: AUTH_HEADER
        request_block = response_json['request']
        %w[quarter age_group age_group_options federation club year_end page per_page total_count].each do |field|
          assert request_block.key?(field), "request block must contain #{field}"
        end
      end

      test 'request block reflects query parameters' do
        get api_v1_listings_path(quarter: QUARTER, age_group_slug: 'm00'),
            headers: AUTH_HEADER,
            params: { federation: 'BAD', per_page: 10, page: 2 }
        block = response_json['request']
        assert_equal QUARTER, block['quarter']
        assert_equal 'm00', block['age_group']
        assert_equal 'BAD', block['federation']
        assert_equal 10, block['per_page']
        assert_equal 2, block['page']
        assert_equal false, block['year_end']
      end

      # --- Data content ---

      test 'each record contains required fields' do
        get api_v1_listings_path(quarter: QUARTER, age_group_slug: 'm00'), headers: AUTH_HEADER
        record = response_json['data'].first
        %w[dtb_id ranking_position lastname firstname nationality club federation score position_change].each do |field|
          assert record.key?(field), "data record must contain #{field}"
        end
      end

      test 'data is ordered by ranking_position' do
        get api_v1_listings_path(quarter: QUARTER, age_group_slug: 'm00'), headers: AUTH_HEADER
        positions = response_json['data'].map { |r| r['ranking_position'] }
        assert_equal positions.sort, positions
      end

      # --- Slug parsing ---

      test 'm00 slug returns male adult rankings' do
        get api_v1_listings_path(quarter: QUARTER, age_group_slug: 'm00'), headers: AUTH_HEADER
        dtb_ids = response_json['data'].map { |r| r['dtb_id'] }
        dtb_ids.each do |id|
          assert id.between?(10_000_000, 19_999_999), "dtb_id #{id} must be in male range"
        end
      end

      test 'w00 slug returns female adult rankings' do
        get api_v1_listings_path(quarter: '2018-07-01', age_group_slug: 'w00'), headers: AUTH_HEADER
        json = response_json
        assert_response :success
        json['data'].each do |r|
          assert r['dtb_id'].between?(20_000_000, 29_999_999),
                 "dtb_id #{r['dtb_id']} must be in female range"
        end
      end

      # --- Filters ---

      test 'federation filter limits results' do
        get api_v1_listings_path(quarter: QUARTER, age_group_slug: 'm00'),
            headers: AUTH_HEADER,
            params: { federation: 'BAD' }
        data = response_json['data']
        assert(data.all? { |r| r['federation'] == 'BAD' })
      end

      test 'club filter limits results' do
        get api_v1_listings_path(quarter: QUARTER, age_group_slug: 'm00'),
            headers: AUTH_HEADER,
            params: { club: 'Testclub' }
        data = response_json['data']
        assert(data.all? { |r| r['club'].downcase.include?('testclub') })
      end

      # --- Pagination ---

      test 'per_page limits data array size' do
        get api_v1_listings_path(quarter: QUARTER, age_group_slug: 'm00'),
            headers: AUTH_HEADER,
            params: { per_page: 1 }
        assert_equal 1, response_json['data'].size
      end

      test 'total_count reflects all matching records regardless of page size' do
        get api_v1_listings_path(quarter: QUARTER, age_group_slug: 'm00'), headers: AUTH_HEADER
        total = response_json['request']['total_count']
        assert total >= 3, "expected at least 3 m00 records for #{QUARTER}, got #{total}"
      end

      test 'per_page is capped at 100' do
        get api_v1_listings_path(quarter: QUARTER, age_group_slug: 'm00'),
            headers: AUTH_HEADER,
            params: { per_page: 9999 }
        assert_equal 100, response_json['request']['per_page']
      end

      test 'page 2 with per_page 1 returns second record' do
        get api_v1_listings_path(quarter: QUARTER, age_group_slug: 'm00'),
            headers: AUTH_HEADER,
            params: { per_page: 1 }
        first_id = response_json['data'].first['dtb_id']

        get api_v1_listings_path(quarter: QUARTER, age_group_slug: 'm00'),
            headers: AUTH_HEADER,
            params: { per_page: 1, page: 2 }
        second_id = response_json['data'].first['dtb_id']

        assert_not_equal first_id, second_id
      end

      # --- Position change ---

      test 'position_change is calculated from previous quarter' do
        get api_v1_listings_path(quarter: QUARTER, age_group_slug: 'm00'),
            headers: AUTH_HEADER,
            params: { federation: 'BAD' }
        record = response_json['data'].find { |r| r['dtb_id'] == 10_001_001 }
        assert_not_nil record
        # api_herren_q4_2025_first has position 3, current position is 1 → change = 3 - 1 = 2
        assert_equal 2, record['position_change']
      end

      test 'position_change is nil for new entries without previous ranking' do
        get api_v1_listings_path(quarter: QUARTER, age_group_slug: 'm00'),
            headers: AUTH_HEADER,
            params: { federation: 'WTB' }
        record = response_json['data'].find { |r| r['dtb_id'] == 10_002_002 }
        assert_not_nil record
        assert_nil record['position_change']
      end

      # --- HTTP Caching ---

      test 'response includes ETag header' do
        get api_v1_listings_path(quarter: QUARTER, age_group_slug: 'm00'), headers: AUTH_HEADER
        assert response.headers['ETag'].present?, 'response must include ETag header'
      end

      test 'returns 304 when ETag matches' do
        get api_v1_listings_path(quarter: QUARTER, age_group_slug: 'm00'), headers: AUTH_HEADER
        etag = response.headers['ETag']

        get api_v1_listings_path(quarter: QUARTER, age_group_slug: 'm00'),
            headers: AUTH_HEADER.merge('If-None-Match' => etag)
        assert_response :not_modified
      end

      test 'returns 200 when ETag does not match' do
        get api_v1_listings_path(quarter: QUARTER, age_group_slug: 'm00'),
            headers: AUTH_HEADER.merge('If-None-Match' => '"stale-etag"')
        assert_response :success
      end

      # --- Rate limiting ---

      test 'returns 429 when rate limit counter is exhausted' do
        with_incremented_cache(1001) do
          get api_v1_listings_path(quarter: QUARTER, age_group_slug: 'm00'), headers: AUTH_HEADER
          assert_response :too_many_requests
          assert_equal 'Too Many Requests', response_json['error']
        end
      end

      test 'rate limit allows requests below the limit' do
        with_incremented_cache(999) do
          get api_v1_listings_path(quarter: QUARTER, age_group_slug: 'm00'), headers: AUTH_HEADER
          assert_response :success
        end
      end

      def with_incremented_cache(count)
        cache = ActionController::Base.cache_store
        cache.define_singleton_method(:increment) { |*| count }
        yield
      ensure
        cache.singleton_class.send(:remove_method, :increment)
      end

      private

      def response_json
        JSON.parse(response.body)
      end
    end
  end
end
