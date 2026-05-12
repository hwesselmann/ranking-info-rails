# frozen_string_literal: true

require 'test_helper'

class StatusControllerTest < ActionDispatch::IntegrationTest
  test 'should get status' do
    get status_path
    assert_response :success
    assert_select 'title', full_title('Status')
  end
end
