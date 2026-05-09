require 'test_helper'

class SiteLayoutTest < ActionDispatch::IntegrationTest
  LINK_SELECTOR = 'a[href=?]'.freeze

  test 'layout links' do
    get root_path
    assert_template 'static_pages/home'
    assert_select LINK_SELECTOR, root_path, count: 1
    assert_select LINK_SELECTOR, about_path, count: 1
    assert_select LINK_SELECTOR, players_path, count: 2
    assert_select LINK_SELECTOR, clubs_path, count: 2
  end
end
