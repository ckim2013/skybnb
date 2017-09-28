# == Schema Information
#
# Table name: reviews
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  body       :text             not null
#  rating     :integer          not null
#  lodging_id :integer          not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Review < ApplicationRecord
  validates :title, :body, :lodging_id, :author_id, :rating, presence: true
  validates :rating, numericality: { only_integer: true,
                                     greater_than: 0,
                                     less_than: 6 }

  belongs_to :lodging,
             primary_key: :id,
             foreign_key: :lodging_id,
             class_name: :Lodging

  belongs_to :author,
             primary_key: :id,
             foreign_key: :author_id,
             class_name: :User

end
