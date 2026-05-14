# frozen_string_literal: true

require 'test_helper'

module Api
  module V1
    class PlayersControllerTest < ActionDispatch::IntegrationTest
      TEST_TOKEN = 'test-api-token'
      AUTH_HEADER = { 'Authorization' => "Bearer #{TEST_TOKEN}" }.freeze

      setup do
        ENV['API_BEARER_TOKEN'] = TEST_TOKEN
      end

      teardown do
        ENV.delete('API_BEARER_TOKEN')
      end

      # --- Authentication ---

      test 'index returns 401 without authorization header' do
        get api_v1_players_path, params: { lastname: 'Mustermann' }
        assert_response :unauthorized
      end

      test 'show returns 401 without authorization header' do
        get api_v1_player_path(10_001_001)
        assert_response :unauthorized
      end

      # --- Search (index) ---

      test 'index returns 400 when lastname is missing' do
        get api_v1_players_path, headers: AUTH_HEADER
        assert_response :bad_request
        assert_equal 'lastname parameter required', response_json['error']
      end

      test 'index returns 404 when no player matches lastname' do
        get api_v1_players_path, headers: AUTH_HEADER, params: { lastname: 'NichtVorhanden' }
        assert_response :not_found
      end

      test 'index returns matching players by lastname' do
        get api_v1_players_path, headers: AUTH_HEADER, params: { lastname: 'Mustermann' }
        assert_response :success
        data = response_json['data']
        assert(data.any? { |p| p['dtb_id'] == 10_001_001 })
      end

      test 'index response contains request and data keys' do
        get api_v1_players_path, headers: AUTH_HEADER, params: { lastname: 'Mustermann' }
        json = response_json
        assert json.key?('request'), 'response must have a request block'
        assert json.key?('data'), 'response must have a data array'
      end

      test 'index request block reflects query parameters' do
        get api_v1_players_path, headers: AUTH_HEADER, params: { lastname: 'Mustermann', yob: '2000' }
        block = response_json['request']
        assert_equal 'Mustermann', block['lastname']
        assert_equal '2000', block['yob']
        assert block.key?('total_count')
      end

      test 'index request block total_count matches result size' do
        get api_v1_players_path, headers: AUTH_HEADER, params: { lastname: 'Mustermann' }
        json = response_json
        assert_equal json['data'].size, json['request']['total_count']
      end

      test 'index request block yob is null when not provided' do
        get api_v1_players_path, headers: AUTH_HEADER, params: { lastname: 'Mustermann' }
        assert_nil response_json['request']['yob']
      end

      test 'index data entry contains required fields' do
        get api_v1_players_path, headers: AUTH_HEADER, params: { lastname: 'Mustermann' }
        player = response_json['data'].first
        %w[dtb_id lastname firstname club links].each do |field|
          assert player.key?(field), "search result must contain #{field}"
        end
        assert player['links'].key?('self'), 'links must contain self'
      end

      test 'index self link points to player detail endpoint' do
        get api_v1_players_path, headers: AUTH_HEADER, params: { lastname: 'Mustermann' }
        self_link = response_json['data'].first['links']['self']
        assert_match %r{/api/v1/players/10001001}, self_link
      end

      test 'index filters by lastname case-insensitively' do
        get api_v1_players_path, headers: AUTH_HEADER, params: { lastname: 'mustermann' }
        assert_response :success
        assert(response_json['data'].any? { |p| p['lastname'] == 'Mustermann' })
      end

      test 'index filters by yob when provided' do
        # dtb_id 10_001_001 → male range starting at 10_000_000, yob key 100 → year 2000
        get api_v1_players_path, headers: AUTH_HEADER, params: { lastname: 'Mustermann', yob: '2000' }
        assert_response :success
        assert(response_json['data'].any? { |p| p['dtb_id'] == 10_001_001 })
      end

      test 'index returns 404 when yob does not match any player' do
        get api_v1_players_path, headers: AUTH_HEADER, params: { lastname: 'Mustermann', yob: '1990' }
        assert_response :not_found
      end

      # --- Detail (show) ---

      test 'show returns 404 for unknown dtb_id' do
        get api_v1_player_path(99_999_999), headers: AUTH_HEADER
        assert_response :not_found
      end

      test 'show returns player data for known dtb_id' do
        get api_v1_player_path(10_001_001), headers: AUTH_HEADER
        assert_response :success
        data = response_json['data']
        assert_equal 10_001_001, data['dtb_id']
        assert_equal 'Mustermann', data['lastname']
        assert_equal 'Max', data['firstname']
      end

      test 'show result contains required fields' do
        get api_v1_player_path(10_001_001), headers: AUTH_HEADER
        data = response_json['data']
        %w[dtb_id lastname firstname nationality club federation rankings].each do |field|
          assert data.key?(field), "player detail must contain #{field}"
        end
      end

      test 'show rankings contain required fields' do
        get api_v1_player_path(10_001_001), headers: AUTH_HEADER
        ranking = response_json['data']['rankings'].first
        %w[quarter age_group ranking_position score].each do |field|
          assert ranking.key?(field), "ranking entry must contain #{field}"
        end
      end

      test 'show returns multiple ranking entries across age groups' do
        # Fixtures: api_herren_q2_2026_first (m00), api_herren_q1_2026_first (m00),
        #           api_mustermann_u18_q1_2026 (U18, age_group_ranking: true → excluded)
        get api_v1_player_path(10_001_001), headers: AUTH_HEADER
        rankings = response_json['data']['rankings']
        assert rankings.size >= 2
      end

      test 'show excludes age_group_ranking special entries' do
        get api_v1_player_path(10_001_001), headers: AUTH_HEADER
        # api_mustermann_u18_q1_2026 has age_group_ranking: true — must not appear
        rankings = response_json['data']['rankings']
        assert_not(rankings.any? { |r| r['age_group'] == 'U18' })
      end

      private

      def response_json
        JSON.parse(response.body)
      end
    end
  end
end
