class DeleteTable < ActiveRecord::Migration[7.0]
  def change
    drop_table :categories_products
  end
end
