# == Schema Information
#
# Table name: bookings
#
#  id         :integer          not null, primary key
#  start_date :date             not null
#  end_date   :date             not null
#  lodging_id :integer          not null
#  booker_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Booking < ApplicationRecord
  validates :start_date, :end_date, :lodging_id, :booker_id, presence: true

  belongs_to :lodging,
             primary_key: :id,
             foreign_key: :lodging_id,
             class_name: :Lodging

  belongs_to :booker,
             primary_key: :id,
             foreign_key: :booker_id,
             class_name: :User
end
