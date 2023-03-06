class CreateOrders < ActiveRecord::Migration[7.0]
  def change
    create_table :orders do |t|
      t.references :user, null: false, foreign_key: true
      t.integer :total
      t.integer :shipping
      t.string :status
      t.string :address

      t.timestamps
    end
  end
end
