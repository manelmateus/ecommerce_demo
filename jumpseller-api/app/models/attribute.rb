class Attribute < ApplicationRecord
    validates_uniqueness_of :name
    serialize :options, Array
    has_and_belongs_to_many :products
end
