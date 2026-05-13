# frozen_string_literal: true

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

  test 'index with exact dtb_id single match redirects to player show' do
    get players_path, params: { dtb_id: '10001001' }
    assert_redirected_to player_path('10001001')
  end

  test 'index with dtb_id prefix matching multiple players renders list' do
    get players_path, params: { dtb_id: '1' }
    assert_response :success
  end

  test 'index with lastname single match redirects to player show' do
    get players_path, params: { lastname: 'Mustermann' }
    assert_redirected_to player_path(10_001_001)
  end

  test 'index with lastname matching multiple players renders list' do
    get players_path, params: { lastname: 'muster' }
    assert_response :success
  end

  test 'index with lastname that matches nothing renders empty list' do
    get players_path, params: { lastname: 'Nonexistent' }
    assert_response :success
  end

  test 'index with lastname and yob single match redirects to player show' do
    # Max Mustermann: dtb_id 10_001_001, key=100 → yob '2000' → s_yob[2,4]='00' → 0+100=100
    get players_path, params: { lastname: 'Mustermann', yob: '2000' }
    assert_redirected_to player_path(10_001_001)
  end

  test 'index with yob single match redirects to player show' do
    # dtb_id 10_888_888: key=108 → yob '2008' → s_yob[2,4]='08' → 8+100=108
    get players_path, params: { yob: '2008' }
    assert_redirected_to player_path(10_888_888)
  end

  test 'index with commit param shows all players' do
    get players_path, params: { commit: 'Suchen' }
    assert_response :success
  end
end
