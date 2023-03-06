class ProductSerializer < ActiveModel::Serializer
  attributes :id,:name, :short_desc, :des, :price, :ship_price, :stock, :tax, :sku, :active, :img, :popular, :created_at
  has_many :categories
  has_many :tags
  has_many :product_attributes
end
