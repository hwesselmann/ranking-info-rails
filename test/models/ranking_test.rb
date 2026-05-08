# frozen_string_literal: true

require 'test_helper'

class RankingTest < ActiveSupport::TestCase
  test 'period extraction from filename' do
    sut = Ranking.extract_period_from_filename('Junioren_20180331.csv')
    assert_equal(Date.new(2018, 3, 31), sut)

    sut = Ranking.extract_period_from_filename('Junioren_20121231.csv')
    assert_equal(Date.new(2012, 12, 31), sut)
  end

  test 'period extraction works for Herren and Damen filenames' do
    assert_equal(Date.new(2018, 4, 1), Ranking.extract_period_from_filename('Herren_20180401.csv'))
    assert_equal(Date.new(2018, 4, 1), Ranking.extract_period_from_filename('Damen_20180401.csv'))
  end

  test 'throw exception for invalid period extraction' do
    exception = assert_raises RuntimeError do
      Ranking.extract_period_from_filename('Junioren-20180331.csv')
    end
    exp = "could not retrieve period part from filename 'Junioren-20180331.csv'"
    assert_equal(exp, exception.message)
  end

  test 'calculation of yob to fetch from db' do
    date = Date.new(2019, 3, 31)
    sut = Ranking.yob_range_to_fetch('2008', 11, date, 100)
    assert_equal(108, sut.fetch(0))
    assert_equal(1, sut.size)

    sut = Ranking.yob_range_to_fetch('2008', 12, date, 100)
    assert_equal(108, sut.fetch(0))
    assert_equal(107, sut.fetch(1))
    assert_equal(2, sut.size)

    sut = Ranking.yob_range_to_fetch('2008', 14, date, 200)
    assert_equal(208, sut.fetch(0))
    assert_equal(206, sut.fetch(2))
    assert_equal(4, sut.size)

    sut = Ranking.yob_range_to_fetch('2008', 16, date, 200)
    assert_equal(208, sut.fetch(0))
    assert_equal(204, sut.fetch(4))
    assert_equal(6, sut.size)
  end

  test 'raises DuplicateImportError when importing the same file twice' do
    Ranking.import_rankings('./test/fixtures/files/Herren_20180401.csv')
    exception = assert_raises Ranking::DuplicateImportError do
      Ranking.import_rankings('./test/fixtures/files/Herren_20180401.csv')
    end
    assert_match(/herren.*already been imported/, exception.message)
  end

  test 'full ranking_file_import for youth' do
    assert(File.exist?('./test/fixtures/files/Junioren_20180401.csv'))
    assert(File.exist?('./test/fixtures/files/Juniorinnen_20180401.csv'))
    count_before = Ranking.count
    Ranking.import_rankings('./test/fixtures/files/Junioren_20180401.csv')
    Ranking.import_rankings('./test/fixtures/files/Juniorinnen_20180401.csv')
    assert_equal(count_before + 288, Ranking.count)
  end

  test 'Herren import stores records with age_group m00 and correct positions' do
    assert(File.exist?('./test/fixtures/files/Herren_20180401.csv'))
    count_before = Ranking.count

    Ranking.import_rankings('./test/fixtures/files/Herren_20180401.csv')

    herren = Ranking.where(age_group: 'm00', date: Date.new(2018, 4, 1))
    assert_equal(10, herren.count)
    assert_equal(count_before + 10, Ranking.count)

    # positions are taken directly from the file, no recalculation
    assert_equal(1, herren.find_by(lastname: 'Mueller').ranking_position)
    assert_equal(5, herren.find_by(lastname: 'Weber').ranking_position)
    assert_equal(10, herren.find_by(lastname: 'Koch').ranking_position)

    # no derived youth rankings must have been created
    assert_equal(0, Ranking.where(age_group: 'U12', date: Date.new(2018, 4, 1)).count)
  end

  test 'Damen import stores records with age_group w00 and correct positions' do
    assert(File.exist?('./test/fixtures/files/Damen_20180401.csv'))
    count_before = Ranking.count

    Ranking.import_rankings('./test/fixtures/files/Damen_20180401.csv')

    damen = Ranking.where(age_group: 'w00', date: Date.new(2018, 4, 1))
    assert_equal(10, damen.count)
    assert_equal(count_before + 10, Ranking.count)

    # positions are taken directly from the file, no recalculation
    assert_equal(1, damen.find_by(lastname: 'Meyer').ranking_position)
    assert_equal(5, damen.find_by(lastname: 'Klein').ranking_position)
    assert_equal(10, damen.find_by(lastname: 'Braun').ranking_position)

    # no derived youth rankings must have been created
    assert_equal(0, Ranking.where(age_group: 'U12', date: Date.new(2018, 4, 1)).count)
  end
end
