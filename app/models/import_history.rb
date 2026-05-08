# frozen_string_literal: true

#
# Model for storing the history of ranking file imports
#
class ImportHistory < ApplicationRecord
  CATEGORIES = %w[Herren Damen Junioren Juniorinnen].freeze

  validates :filename, presence: true
  validates :category, presence: true, inclusion: { in: CATEGORIES }
  validates :period, presence: true
  validates :imported_at, presence: true
end
