# frozen_string_literal: true

require 'test_helper'

# Unit tests for PlayersController private methods that do not require the HTTP stack.
class PlayersControllerUnitTest < ActiveSupport::TestCase
  setup { @sut = PlayersController.new }

  test 'fill_up_dtb_id pads a partial id to 8 digits' do
    assert_equal 10_812_345, @sut.send(:fill_up_dtb_id, 10_812_345)
    assert_equal 10_000_000, @sut.send(:fill_up_dtb_id, 1)
    assert_equal 10_000_000, @sut.send(:fill_up_dtb_id, 10)
    assert_equal 20_800_000, @sut.send(:fill_up_dtb_id, 208)
  end

  test 'fill_up_dtb_id_end pads a partial id to its maximum 8-digit value' do
    assert_equal 10_812_345, @sut.send(:fill_up_dtb_id_end, 10_812_345)
    assert_equal 19_999_999, @sut.send(:fill_up_dtb_id_end, 1)
    assert_equal 10_999_999, @sut.send(:fill_up_dtb_id_end, 10)
    assert_equal 20_899_999, @sut.send(:fill_up_dtb_id_end, 208)
  end

  test 'recent_ranking_dates returns at most 4 most recent dates' do
    dates = @sut.send(:recent_ranking_dates, 10_888_888)

    assert_equal 4, dates.size
    assert_equal Date.new(2026, 4, 1), dates.first
    assert_equal Date.new(2025, 7, 1), dates.last
    assert dates.none? { |d| d == Date.new(2025, 4, 1) }, 'oldest adult-only date must be excluded'
  end

  test 'data_for_last_twelve_months returns 4 x-axis dates in chronological order' do
    chart_data, = @sut.send(:data_for_last_twelve_months, 10_888_888)

    all_dates = chart_data.flat_map { |series| series[:data].keys }.uniq
    assert_equal 4, all_dates.size
    sorted = all_dates.sort_by { |d| Date.strptime(d, '%d.%m.%Y') }
    assert_equal sorted, all_dates, 'x-axis dates must be in ascending chronological order'
  end

  test 'data_for_last_twelve_months returns correct series for youth and adult' do
    chart_data, = @sut.send(:data_for_last_twelve_months, 10_888_888)

    series_names = chart_data.map { |s| s[:name] }
    assert_includes series_names, 'U18'
    assert_includes series_names, 'Aktive'
    assert_equal 4, chart_data.find { |s| s[:name] == 'U18' }[:data].size
    assert_equal 3, chart_data.find { |s| s[:name] == 'Aktive' }[:data].size
  end

  test 'current_rankings returns rankings with position and score changes' do
    rankings = @sut.send(:current_rankings, 10_001_001)

    assert_equal 1, rankings.size
    ranking = rankings.first
    assert_equal 'm00', ranking['age_group']
    assert_equal 1, ranking['position']
    assert_equal '+2', ranking['position_change']
    assert ranking['score_change'].start_with?('+'), 'score increased so change must be positive'
  end

  test 'current_rankings returns empty array when player has no data in the current quarter' do
    assert_empty @sut.send(:current_rankings, 10_711_111)
  end

  test 'complete_rankings returns history entries grouped by year and quarter' do
    rankings = @sut.send(:complete_rankings, 10_001_001)

    assert_not_empty rankings
    assert(rankings.all? { |r| r.key?('year') && r.key?('quarter') })
  end
end
