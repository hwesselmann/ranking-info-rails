require 'test_helper'

class FederationsControllerTest < ActionDispatch::IntegrationTest
  test 'get current quarter' do
    sut = FederationsController.new
    assert_instance_of(Date, sut.send(:current_quarter))
    assert_equal('2026-04-01', sut.send(:current_quarter).strftime('%Y-%m-%d'))
  end
end
