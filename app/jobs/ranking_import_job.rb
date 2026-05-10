# frozen_string_literal: true

#
# Scheduled job that scans the import folder for new CSV ranking files and imports them.
#
class RankingImportJob < ApplicationJob
  queue_as :default

  def perform
    import_folder = ENV.fetch('IMPORT_FOLDER', Rails.root.join('storage', 'import').to_s)
    csv_files = Dir.glob(File.join(import_folder, '*.csv'))

    csv_files.each do |file_path|
      import_file(file_path, import_folder)
    end
  end

  private

  def import_file(file_path, import_folder)
    Ranking.import_rankings(file_path)
    logger.info "RankingImportJob: imported '#{File.basename(file_path)}'"
  rescue Ranking::DuplicateImportError
    logger.info "RankingImportJob: skipping '#{File.basename(file_path)}' (already imported)"
  rescue StandardError => e
    write_error_log(import_folder, "#{File.basename(file_path)}: #{e.message}")
    logger.error "RankingImportJob: error importing '#{File.basename(file_path)}': #{e.message}"
  end

  def write_error_log(import_folder, message)
    error_log = File.join(import_folder, 'error.log')
    separator = File.exist?(error_log) ? "\n\n" : ''
    File.open(error_log, 'a') { |f| f.write("#{separator}#{message}") }
  end
end
