require 'test_helper'

class UsersLoginTest < ActionDispatch::IntegrationTest
  LINK_SELECTOR = 'a[href=?]'.freeze
  SESSIONS_NEW_TEMPLATE = 'sessions/new'.freeze

  def setup
    @user = users(:testuser)
  end

  test 'login with valid information' do
    get login_path
    post login_path, params: { session: { email: @user.email,
                                          password: 'password' } }
    assert_redirected_to root_path
    follow_redirect!
    assert_template 'static_pages/home'
    assert is_logged_in?
    assert_select LINK_SELECTOR, login_path, count: 0
    assert_select LINK_SELECTOR, logout_path
  end

  test 'login with invalid information' do
    get login_path
    assert_template SESSIONS_NEW_TEMPLATE
    post login_path, params: { session: { email: '', password: '' } }
    assert_template SESSIONS_NEW_TEMPLATE
    assert_not flash.empty?
    get root_path
    assert_not is_logged_in?
    assert flash.empty?
  end

  test 'login with valid email/invalid password' do
    get login_path
    assert_template SESSIONS_NEW_TEMPLATE
    post login_path, params: { session: { email: @user.email,
                                          password: 'invalid' } }
    assert_not is_logged_in?
    assert_template SESSIONS_NEW_TEMPLATE
    assert_not flash.empty?
    get root_path
    assert flash.empty?
  end

  test 'login with valid information followed by logout' do
    get login_path
    post login_path, params: { session: { email: @user.email,
                                          password: 'password' } }
    assert is_logged_in?
    assert_redirected_to root_path
    follow_redirect!
    assert_template 'static_pages/home'
    assert_select LINK_SELECTOR, login_path, count: 0
    assert_select LINK_SELECTOR, logout_path
    delete logout_path
    assert_not is_logged_in?
    assert_redirected_to root_url
    follow_redirect!
    assert_select LINK_SELECTOR, login_path, count: 0
    assert_select LINK_SELECTOR, logout_path, count: 0
  end
end
