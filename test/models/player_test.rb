# frozen_string_literal: true

require 'test_helper'

class PlayerTest < ActiveSupport::TestCase
  test 'load_player_profile returns player with correct attributes' do
    player = Player.load_player_profile(10_001_001)

    assert_equal 10_001_001, player.dtb_id
    assert_equal 'Mustermann', player.lastname
    assert_equal 'Max', player.firstname
    assert_equal 'TC Testclub', player.club
    assert_equal 'BAD', player.federation
  end

  test 'load_player_profile returns sorted deduplicated club history' do
    player = Player.load_player_profile(10_001_001)

    assert_not_empty player.clubs
    assert player.clubs.all?(Club)
    assert_equal player.clubs.map(&:name), player.clubs.map(&:name).sort
    assert_equal 1, player.clubs.size
  end

  test 'find_players_by_lastname returns matching players' do
    players = Player.find_players_by_lastname('Mustermann')

    assert_equal 1, players.size
    assert_equal 10_001_001, players.first.dtb_id
  end

  test 'find_players_by_lastname is case insensitive' do
    assert_equal 1, Player.find_players_by_lastname('mustermann').size
    assert_equal 1, Player.find_players_by_lastname('MUSTERMANN').size
  end

  test 'find_players_by_lastname returns empty array when no match' do
    assert_empty Player.find_players_by_lastname('Nonexistent')
  end

  test 'find_players_by_lastname deduplicates players appearing in multiple ranking periods' do
    players = Player.find_players_by_lastname('P****y')

    assert_equal 1, players.size
    assert_equal 10_711_111, players.first.dtb_id
  end

  test 'find_players_by_lastname_and_yob filters by lastname and dtb_id range' do
    # dtb_id 10_711_111: key = 10_711_111 / 100_000 = 107
    players = Player.find_players_by_lastname_and_yob('P****y', 107, 207)

    assert_equal 1, players.size
    assert_equal 10_711_111, players.first.dtb_id
  end

  test 'find_players_by_lastname_and_yob returns empty when yob range excludes match' do
    players = Player.find_players_by_lastname_and_yob('Mustermann', 999, 1099)

    assert_empty players
  end

  test 'find_players_by_dtb_id returns player for exact dtb_id range' do
    players = Player.find_players_by_dtb_id(10_001_001, 10_001_001)

    assert_equal 1, players.size
    assert_equal 10_001_001, players.first.dtb_id
  end

  test 'find_players_by_dtb_id returns multiple players across a range' do
    players = Player.find_players_by_dtb_id(10_001_001, 10_002_002)

    dtb_ids = players.map(&:dtb_id)
    assert_includes dtb_ids, 10_001_001
    assert_includes dtb_ids, 10_002_002
  end

  test 'find_players_by_yob returns players within the birth year encoding range' do
    # dtb_id 10_711_111 / 100_000 = 107 → matches yob_male=107
    players = Player.find_players_by_yob(107, 207)

    assert_includes players.map(&:dtb_id), 10_711_111
  end

  test 'find_all_players returns unique players without duplicate dtb_ids' do
    players = Player.find_all_players

    dtb_ids = players.map(&:dtb_id)
    assert_equal dtb_ids.uniq, dtb_ids
    assert_includes dtb_ids, 10_711_111
    assert_includes dtb_ids, 10_001_001
  end
end
