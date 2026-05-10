# frozen_string_literal: true

require 'test_helper'

class RankingImportJobTest < ActiveSupport::TestCase
  HERREN_FIXTURE = Rails.root.join('test/fixtures/files/Herren_20180401.csv').to_s

  setup do
    @import_dir = Dir.mktmpdir
    @original_import_folder = ENV.fetch('IMPORT_FOLDER', nil)
    ENV['IMPORT_FOLDER'] = @import_dir
  end

  teardown do
    FileUtils.rm_rf(@import_dir)
    ENV['IMPORT_FOLDER'] = @original_import_folder
  end

  test 'does nothing when import folder contains no CSV files' do
    assert_no_difference 'ImportHistory.count' do
      RankingImportJob.new.perform
    end
    refute File.exist?(File.join(@import_dir, 'error.log'))
  end

  test 'imports a new CSV file and creates an ImportHistory record' do
    FileUtils.cp(HERREN_FIXTURE, @import_dir)
    assert_difference 'ImportHistory.count', 1 do
      RankingImportJob.new.perform
    end
  end

  test 'skips already-imported files without creating an error log' do
    FileUtils.cp(HERREN_FIXTURE, @import_dir)
    ImportHistory.create!(filename: 'Herren_20180401.csv', category: 'Herren',
                          period: Date.new(2018, 4, 1), imported_at: Time.current)
    RankingImportJob.new.perform
    refute File.exist?(File.join(@import_dir, 'error.log'))
  end

  test 'creates error.log when an import fails due to an unrecognized file category' do
    FileUtils.cp(HERREN_FIXTURE, File.join(@import_dir, 'Invalid_20180401.csv'))
    RankingImportJob.new.perform
    assert File.exist?(File.join(@import_dir, 'error.log'))
  end

  test 'error.log contains the filename and the error message' do
    FileUtils.cp(HERREN_FIXTURE, File.join(@import_dir, 'Invalid_20180401.csv'))
    RankingImportJob.new.perform
    content = File.read(File.join(@import_dir, 'error.log'))
    assert_includes content, 'Invalid_20180401.csv'
  end

  test 'appends to existing error.log with a blank line separator' do
    FileUtils.cp(HERREN_FIXTURE, File.join(@import_dir, 'Invalid_20180401.csv'))
    FileUtils.cp(HERREN_FIXTURE, File.join(@import_dir, 'Bogus_20180401.csv'))
    RankingImportJob.new.perform
    content = File.read(File.join(@import_dir, 'error.log'))
    assert content.include?("\n\n"), 'error.log entries should be separated by a blank line'
  end
end
