# frozen_string_literal: true

#
# Removes the users table as web-based login and upload are no longer supported.
#
class DropUsersTable < ActiveRecord::Migration[8.1]
  def up
    drop_table :users
  end

  def down
    create_table :users do |t|
      t.string :email, index: { unique: true }
      t.string :name
      t.string :password_digest
      t.timestamps
    end
  end
end
