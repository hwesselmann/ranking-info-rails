require 'test_helper'

class ImportControllerTest < ActionDispatch::IntegrationTest
  def setup
    @user = users(:testuser)
  end

  test 'should get status' do
    get status_path
    assert_response :success
    assert_select 'title', full_title('Status')
  end

  test 'should redirect update when not logged in' do
    get import_path
    assert_not flash.empty?
    assert_redirected_to login_url
  end

  test 'redirects with danger flash when uploading a duplicate file' do
    ImportHistory.create!(
      filename: 'Herren_20180401.csv',
      category: 'Herren',
      period: Date.new(2018, 4, 1),
      imported_at: Time.current
    )
    post login_path, params: { session: { email: @user.email, password: 'password' } }
    file = fixture_file_upload('Herren_20180401.csv', 'text/csv')
    post import_path, params: { file: file }
    assert_redirected_to status_url
    assert_not_nil flash[:danger]
    assert_match(/already been imported/, flash[:danger])
  end
end
