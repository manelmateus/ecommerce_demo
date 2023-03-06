class CreateTags < ActiveRecord::Migration[7.0]
  def change
    create_table :tags do |t|
      t.string :name
      t.string :desc

      t.timestamps
    end
    add_index :name, unique: true
  end
end
