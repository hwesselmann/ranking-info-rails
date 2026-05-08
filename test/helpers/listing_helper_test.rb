# frozen_string_literal: true

require 'test_helper'

class ListingHelperTest < ActionView::TestCase
  test 'returns nil when previous_positions is nil' do
    result = position_indicator(12_345_678, 10, nil)
    assert_nil result
  end

  test 'returns yellow asterisk when player is absent from previous positions' do
    result = position_indicator(12_345_678, 10, { 99_999_999 => 5 })
    assert_match 'ri-icon-yellow', result
    assert_match 'fa-asterisk', result
  end

  test 'returns green caret-up for small improvement' do
    result = position_indicator(12_345_678, 10, { 12_345_678 => 15 })
    assert_match 'ri-icon-green', result
    assert_match 'fa-caret-up', result
  end

  test 'returns green double-up for improvement of 50 or more' do
    result = position_indicator(12_345_678, 10, { 12_345_678 => 60 })
    assert_match 'ri-icon-green', result
    assert_match 'fa-angle-double-up', result
  end

  test 'returns red caret-down for small decline' do
    result = position_indicator(12_345_678, 15, { 12_345_678 => 10 })
    assert_match 'ri-icon-red', result
    assert_match 'fa-caret-down', result
  end

  test 'returns red double-down for decline of 50 or more' do
    result = position_indicator(12_345_678, 60, { 12_345_678 => 10 })
    assert_match 'ri-icon-red', result
    assert_match 'fa-angle-double-down', result
  end

  test 'returns nil when position is unchanged' do
    result = position_indicator(12_345_678, 10, { 12_345_678 => 10 })
    assert_nil result
  end
end
