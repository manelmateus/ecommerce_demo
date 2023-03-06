class CreateProductTableAgain < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :name
      t.text :short_desc
      t.text :des
      t.string :price
      t.string :ship_price
      t.integer :stock
      t.integer :tax
      t.string :sku
      t.boolean :active
      t.text :img

      t.timestamps
    end
  end
end
