source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '4.0.3'

gem 'bcrypt', '>= 3.1.22'
gem 'rexml', '>= 3.4.2'
gem 'bootsnap', '>= 1.4.2', require: false
gem 'chartkick'
gem 'csv', '>= 3.3.0'
gem 'jbuilder', '>= 2.7'
gem 'puma', '~> 6.4.3'
gem 'rails', '~> 8.0'
gem 'cssbundling-rails'
gem 'jsbundling-rails'
gem 'propshaft'

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'sqlite3', '~> 2.0'
end

group :development do
  gem 'web-console', '>= 3.3.0'
  gem 'solargraph'
  gem 'rubocop'
end

group :test do
  gem 'capybara', '>= 2.15'
  gem 'guard'
  gem 'guard-minitest'
  gem 'minitest'
  gem 'minitest-reporters'
  gem 'rails-controller-testing'
  gem 'selenium-webdriver'
  gem 'simplecov', '0.21.2', require: false
end

group :production do
  gem 'pg'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
