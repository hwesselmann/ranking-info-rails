# frozen_string_literal: true

# Backfills import_histories for ranking data imported before the table existed.
class BackfillImportHistoriesFromRankings < ActiveRecord::Migration[8.1]
  CATEGORY_MAPPINGS = [
    { category: 'Herren',      age_group: 'm00',     dtb_range: nil },
    { category: 'Damen',       age_group: 'w00',     dtb_range: nil },
    { category: 'Junioren',    age_group: 'overall', dtb_range: 10_000_000..19_999_999 },
    { category: 'Juniorinnen', age_group: 'overall', dtb_range: 20_000_000..29_999_999 }
  ].freeze

  def up
    created = CATEGORY_MAPPINGS.sum { |mapping| backfill_category(mapping) }
    say "backfilled #{created} import history record(s)"
  end

  def down
    # Cannot safely distinguish backfilled records from genuine import history
  end

  private

  def backfill_category(mapping)
    scope = build_scope(mapping)
    scope.select(:date).distinct.count do |record|
      next if ImportHistory.exists?(category: mapping[:category], period: record.date)

      create_history(mapping[:category], record.date, scope)
      true
    end
  end

  def build_scope(mapping)
    scope = Ranking.where(age_group: mapping[:age_group])
    mapping[:dtb_range] ? scope.where(dtb_id: mapping[:dtb_range]) : scope
  end

  def create_history(category, period, scope)
    ImportHistory.create!(
      filename: "#{category}_#{period.strftime('%Y%m%d')}.csv",
      category: category,
      period: period,
      imported_at: scope.where(date: period).minimum(:created_at)
    )
  end
end
