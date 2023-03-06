class OrderSerializer < ActiveModel::Serializer
  attributes :id, :total, :shipping, :status, :address, :created_at
  has_one :user
  has_many :order_items
end
