class AlterOrderColumns < ActiveRecord::Migration[7.0]
  def change
    change_column(:orders, :total, :string)
    change_column(:orders, :shipping, :string)
  end
end
