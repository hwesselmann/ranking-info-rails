require 'test_helper'

class PlayersControllerTest < ActionDispatch::IntegrationTest
  test 'should get players' do
    get players_path
    assert_response :success
    assert_select 'title', full_title('Spielersuche')
  end

  test 'should get player profile' do
    get player_path(10_711_111)
    assert_response :success
    assert_select 'title', full_title('Spielerprofil J****n P****y')
  end

  test 'filling up dtb_id' do
    sut = PlayersController.new

    assert_equal(10_812_345, sut.send(:fill_up_dtb_id, 10_812_345))
    assert_equal(10_000_000, sut.send(:fill_up_dtb_id, 1))
    assert_equal(10_000_000, sut.send(:fill_up_dtb_id, 10))
    assert_equal(20_800_000, sut.send(:fill_up_dtb_id, 208))
  end

  test 'filling up dtb_id end' do
    sut = PlayersController.new

    assert_equal(10_812_345, sut.send(:fill_up_dtb_id_end, 10_812_345))
    assert_equal(19_999_999, sut.send(:fill_up_dtb_id_end, 1))
    assert_equal(10_999_999, sut.send(:fill_up_dtb_id_end, 10))
    assert_equal(20_899_999, sut.send(:fill_up_dtb_id_end, 208))
  end

  test 'recent_ranking_dates returns at most 4 most recent dates' do
    sut = PlayersController.new
    dates = sut.send(:recent_ranking_dates, 10_888_888)

    assert_equal 4, dates.size
    assert_equal Date.new(2026, 4, 1), dates.first
    assert_equal Date.new(2025, 7, 1), dates.last
    assert dates.none? { |d| d == Date.new(2025, 4, 1) }, 'oldest adult-only date must be excluded'
  end

  test 'data_for_last_twelve_months returns exactly 4 x-axis dates in chronological order' do
    sut = PlayersController.new
    chart_data, = sut.send(:data_for_last_twelve_months, 10_888_888)

    all_dates = chart_data.flat_map { |series| series[:data].keys }.uniq
    assert_equal 4, all_dates.size

    sorted = all_dates.sort_by { |d| Date.strptime(d, '%d.%m.%Y') }
    assert_equal sorted, all_dates, 'x-axis dates must be in ascending chronological order'
  end

  test 'data_for_last_twelve_months returns correct series for youth and adult' do
    sut = PlayersController.new
    chart_data, = sut.send(:data_for_last_twelve_months, 10_888_888)

    series_names = chart_data.map { |s| s[:name] }
    assert_includes series_names, 'U18'
    assert_includes series_names, 'Aktive'

    u18 = chart_data.find { |s| s[:name] == 'U18' }
    assert_equal 4, u18[:data].size

    aktive = chart_data.find { |s| s[:name] == 'Aktive' }
    assert_equal 3, aktive[:data].size
  end
end
