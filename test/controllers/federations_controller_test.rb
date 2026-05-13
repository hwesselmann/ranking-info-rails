# frozen_string_literal: true

require 'test_helper'

class FederationsControllerTest < ActionDispatch::IntegrationTest
  test 'GET index returns success' do
    get federations_path
    assert_response :success
    assert_select 'title', full_title('Verbandsdaten')
  end

  test 'GET index returns success when no rankings exist' do
    Ranking.delete_all
    get federations_path
    assert_response :success
  end

  test 'current_quarter returns the most recent ranking date' do
    sut = FederationsController.new
    assert_equal Date.new(2026, 4, 1), sut.send(:current_quarter)
  end

  test 'player_count_by_federation counts male age_group_ranking entries per federation' do
    sut = FederationsController.new
    counts = sut.send(:player_count_by_federation, Date.new(2026, 4, 1), 'm')

    assert_equal 1, counts[%w[BAD U14]]
    assert_equal 1, counts[%w[WTB U14]]
  end

  test 'player_count_by_federation counts female age_group_ranking entries per federation' do
    sut = FederationsController.new
    counts = sut.send(:player_count_by_federation, Date.new(2026, 4, 1), 'w')

    assert_equal 1, counts[%w[BAD U16]]
  end

  test 'build_youth_federations groups players by federation and gender-suffixed age group' do
    sut = FederationsController.new
    result = sut.send(:build_youth_federations, Date.new(2026, 4, 1))

    assert_equal 1, result.dig('BAD', 'U14m')
    assert_equal 1, result.dig('BAD', 'U16w')
    assert_equal 1, result.dig('WTB', 'U14m')
  end

  test 'add_active_counts merges adult counts into existing federation entries' do
    sut = FederationsController.new
    federations = { 'BAD' => { 'U14m' => 1 }, 'WTB' => { 'U14m' => 1 } }
    sut.send(:add_active_counts, federations, Date.new(2026, 4, 1))

    assert_equal 1, federations.dig('BAD', 'm00')
    assert_equal 1, federations.dig('WTB', 'm00')
  end

  test 'add_active_counts does not add adult counts for federations not in hash' do
    sut = FederationsController.new
    federations = { 'BAD' => { 'U14m' => 1 } }
    sut.send(:add_active_counts, federations, Date.new(2026, 4, 1))

    refute federations.key?('WTB')
  end
end
