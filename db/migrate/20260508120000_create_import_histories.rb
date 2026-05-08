# frozen_string_literal: true

# Migration to create the import_histories table
class CreateImportHistories < ActiveRecord::Migration[8.1]
  def change
    create_table :import_histories do |t|
      t.string :filename, null: false
      t.string :category, null: false
      t.date :period, null: false
      t.datetime :imported_at, null: false

      t.timestamps
    end
  end
end
