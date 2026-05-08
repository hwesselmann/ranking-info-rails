# frozen_string_literal: true

class BackfillImportHistoriesFromRankings < ActiveRecord::Migration[8.1]
  CATEGORY_MAPPINGS = [
    { category: 'Herren',      age_group: 'm00',     dtb_range: nil },
    { category: 'Damen',       age_group: 'w00',     dtb_range: nil },
    { category: 'Junioren',    age_group: 'overall', dtb_range: 10_000_000..19_999_999 },
    { category: 'Juniorinnen', age_group: 'overall', dtb_range: 20_000_000..29_999_999 }
  ].freeze

  def up
    created = 0

    CATEGORY_MAPPINGS.each do |mapping|
      scope = Ranking.where(age_group: mapping[:age_group])
      scope = scope.where(dtb_id: mapping[:dtb_range]) if mapping[:dtb_range]

      scope.select(:date).distinct.each do |record|
        period = record.date
        next if ImportHistory.exists?(category: mapping[:category], period: period)

        ImportHistory.create!(
          filename: "#{mapping[:category]}_#{period.strftime('%Y%m%d')}.csv",
          category: mapping[:category],
          period: period,
          imported_at: scope.where(date: period).minimum(:created_at)
        )
        created += 1
      end
    end

    say "backfilled #{created} import history record(s)"
  end

  def down
    # Cannot safely distinguish backfilled records from genuine import history
  end
end
