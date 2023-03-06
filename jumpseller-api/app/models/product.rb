class Product < ApplicationRecord
  has_and_belongs_to_many :categories
  has_and_belongs_to_many :product_attributes, class_name: "Attribute"
  has_and_belongs_to_many :tags
  
end
