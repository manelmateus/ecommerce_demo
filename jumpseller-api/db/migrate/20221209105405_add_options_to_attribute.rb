class AddOptionsToAttribute < ActiveRecord::Migration[7.0]
  def change
    add_column :attributes, :options, :string
  end
end
