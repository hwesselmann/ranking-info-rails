# frozen_string_literal: true

# Adds a date-first composite index to speed up quarter-filtered ranking queries.
class AddDateFirstIndexToRankings < ActiveRecord::Migration[8.1]
  def change
    add_index :rankings,
              %i[date age_group age_group_ranking yob_ranking year_end_ranking],
              name: 'idx_rankings_date_age_group_options'
  end
end
