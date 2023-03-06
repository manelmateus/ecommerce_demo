class Tag < ApplicationRecord
    validates_uniqueness_of :name
    has_and_belongs_to_many :products
end