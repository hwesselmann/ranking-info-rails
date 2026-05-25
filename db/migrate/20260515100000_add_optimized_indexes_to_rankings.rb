# frozen_string_literal: true

# Adds composite indexes to the rankings table to speed up common filter queries.
class AddOptimizedIndexesToRankings < ActiveRecord::Migration[8.1]
  def change
    # Kombinierter Index für die häufigste Abfrage: date + dtb_id
    add_index :rankings, %i[date dtb_id], name: 'idx_rankings_date_dtb_id'

    # Kombinierter Index für alle Filteroptionen
    add_index :rankings, %i[date age_group yob_ranking age_group_ranking year_end_ranking],
              name: 'idx_rankings_full_filter_set'

    # Index für federation + date Kombination
    add_index :rankings, %i[federation date], name: 'idx_rankings_federation_date'
  end
end
