class ChangeNullableFieldsProduct < ActiveRecord::Migration[7.0]
  def change
    change_column :products, :category_id, :reference, null: true
    change_column :products, :attribute_id, :reference, null: true
    change_column :products, :tag_id, :reference, null: true
  end
end
