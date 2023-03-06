class AddPopularToProduct < ActiveRecord::Migration[7.0]
  def change
    add_column :products, :popular, :boolean
  end
end
