class OrderItemSerializer < ActiveModel::Serializer
  attributes :id, :quantity, :product_id
  has_one :product
end
