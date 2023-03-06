class CreateAttributes < ActiveRecord::Migration[7.0]
  def change
    create_table :attributes do |t|
      t.string :name
      t.string :desc

      t.timestamps
    end
  end
end
