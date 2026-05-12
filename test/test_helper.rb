ENV['RAILS_ENV'] ||= 'test'
require 'simplecov' # NOSONAR
require 'simplecov_json_formatter' # NOSONAR
SimpleCov.start 'rails' do
  formatter SimpleCov::Formatter::MultiFormatter.new([
                                                       SimpleCov::Formatter::HTMLFormatter,
                                                       SimpleCov::Formatter::JSONFormatter
                                                     ])
end

require_relative '../config/environment' # NOSONAR
require 'rails/test_help' # NOSONAR
require 'minitest/reporters' # NOSONAR

Minitest::Reporters.use!

class ActiveSupport::TestCase
  # Run tests in parallel with specified workers
  # parallelize(workers: :number_of_processors)

  # Setup all fixtures in test/fixtures/*.yml for all tests in alphabetical order.
  fixtures :all

  # Add more helper methods to be used by all tests here...
  include ApplicationHelper
end
