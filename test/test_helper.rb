ENV['RAILS_ENV'] ||= 'test'
require 'simplecov' # NOSONAR
SimpleCov.start 'rails'

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

  # rubocop:disable Style/CommentedKeyword
  def is_logged_in? # NOSONAR - renaming conflicts with SessionsHelper#logged_in?
    # rubocop:enable Style/CommentedKeyword
    !session[:user_id].nil?
  end
end
