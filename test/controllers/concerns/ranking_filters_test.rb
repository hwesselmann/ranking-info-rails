# frozen_string_literal: true

require 'test_helper'

class RankingFiltersTest < ActiveSupport::TestCase
  class Subject
    include RankingFilters

    public(*RankingFilters.private_instance_methods(false))
  end

  setup { @sut = Subject.new }

  test 'gender_selected returns male dtb_id range' do
    assert_equal '(dtb_id >= 10000000 AND dtb_id <= 19999999)', @sut.gender_selected('male')
  end

  test 'gender_selected returns female dtb_id range for any non-male value' do
    assert_equal '(dtb_id >= 20000000 AND dtb_id <= 29999999)', @sut.gender_selected('female')
  end

  test 'age_group_selected uses the given age group' do
    assert_equal ['age_group = ?', 'U18'], @sut.age_group_selected('U18')
  end

  test 'age_group_selected defaults to overall when blank' do
    assert_equal ['age_group = ?', 'overall'], @sut.age_group_selected('')
    assert_equal ['age_group = ?', 'overall'], @sut.age_group_selected(nil)
  end

  test 'federation_selected returns condition array for a non-blank value' do
    assert_equal ['federation = ?', 'BAD'], @sut.federation_selected('BAD')
  end

  test 'federation_selected returns nil for blank value' do
    assert_nil @sut.federation_selected('')
    assert_nil @sut.federation_selected(nil)
  end

  test 'club_selected returns LIKE condition for a non-blank value' do
    result = @sut.club_selected('Rot-Weiss')
    assert_equal 'LOWER(club) LIKE LOWER(?)', result[0]
    assert_includes result[1], 'Rot-Weiss'
  end

  test 'club_selected returns nil for blank value' do
    assert_nil @sut.club_selected('')
  end

  test 'first_quarter? returns true for a January date string' do
    assert @sut.first_quarter?('2026-01-01')
  end

  test 'first_quarter? returns false for non-January date strings' do
    refute @sut.first_quarter?('2026-04-01')
    refute @sut.first_quarter?('2026-07-01')
    refute @sut.first_quarter?('2026-10-01')
  end

  test 'adult_age_group? returns true for m00 and w00' do
    assert @sut.adult_age_group?('m00')
    assert @sut.adult_age_group?('w00')
  end

  test 'adult_age_group? returns false for youth age groups and overall' do
    refute @sut.adult_age_group?('U18')
    refute @sut.adult_age_group?('overall')
  end

  test 'age_group_as_int extracts the numeric part from a youth age group string' do
    assert_equal 18, @sut.age_group_as_int('U18')
    assert_equal 14, @sut.age_group_as_int('U14')
    assert_equal 12, @sut.age_group_as_int('U12')
  end

  test 'default_age_group_filter returns age_group_ranking filter for even age groups' do
    assert_equal 'yob_ranking=false AND age_group_ranking=true', @sut.default_age_group_filter(18)
    assert_equal 'yob_ranking=false AND age_group_ranking=true', @sut.default_age_group_filter(14)
    assert_equal 'yob_ranking=false AND age_group_ranking=true', @sut.default_age_group_filter(12)
  end

  test 'default_age_group_filter returns yob_ranking filter for odd age groups' do
    assert_equal 'yob_ranking=true AND age_group_ranking=false', @sut.default_age_group_filter(13)
    assert_equal 'yob_ranking=true AND age_group_ranking=false', @sut.default_age_group_filter(11)
  end

  test 'year_end_rankings is enabled when flag is 1 and quarter is in January' do
    assert_equal 'year_end_ranking=true', @sut.year_end_rankings('1', '2026-01-01')
  end

  test 'year_end_rankings is disabled when flag is not 1' do
    assert_equal 'year_end_ranking=false', @sut.year_end_rankings('0', '2026-01-01')
  end

  test 'year_end_rankings is disabled when quarter is not in January' do
    assert_equal 'year_end_ranking=false', @sut.year_end_rankings('1', '2026-04-01')
  end

  test 'age_group_options returns adult filter for adult age groups with specified gender' do
    assert_equal 'yob_ranking=false AND age_group_ranking=false',
                 @sut.age_group_options('m00', 'include_younger', 'male')
    assert_equal 'yob_ranking=false AND age_group_ranking=false',
                 @sut.age_group_options('w00', 'include_younger', 'female')
  end

  test 'age_group_options uses default filter when age_group_options param is blank' do
    assert_equal 'yob_ranking=false AND age_group_ranking=true',
                 @sut.age_group_options('U18', nil, 'male')
    assert_equal 'yob_ranking=true AND age_group_ranking=false',
                 @sut.age_group_options('U13', '', 'male')
  end

  test 'age_group_options uses AGE_GROUP_OPTION_FILTERS lookup when provided' do
    assert_equal 'yob_ranking=true AND age_group_ranking=false',
                 @sut.age_group_options('U18', 'only_yob', 'male')
    assert_equal 'yob_ranking=false AND age_group_ranking=false',
                 @sut.age_group_options('U18', 'include_younger', 'male')
  end
end
