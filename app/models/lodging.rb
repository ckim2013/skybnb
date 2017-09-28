# == Schema Information
#
# Table name: lodgings
#
#  id         :integer          not null, primary key
#  owner_id   :integer          not null
#  title      :string           not null
#  street     :string           not null
#  city       :string           not null
#  country    :string           not null
#  image_url  :string           not null
#  rate       :integer          not null
#  room_type  :string           not null
#  beds       :integer          not null
#  bedrooms   :integer          not null
#  bathrooms  :integer          not null
#  guests     :integer          not null
#  check_in   :string           not null
#  amenities  :string           default([]), is an Array
#  bio        :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  lng        :float
#  lat        :float
#

class Lodging < ApplicationRecord
  validates :owner_id, :title, :street, :city, :country, :image_url, :rate,
            :room_type, :beds, :bedrooms, :bathrooms, :guests, :check_in,
            :lat, :lng, :district, presence: true

  validates_uniqueness_of :street, scope: %i{city country}

  validates :room_type, inclusion: {
    in: ['Private Room', 'Shared Room', 'Entire House']
  }

  after_initialize :ensure_default_image

  belongs_to :owner,
             primary_key: :id,
             foreign_key: :owner_id,
             class_name: :User

  has_many :bookings,
           primary_key: :id,
           foreign_key: :lodging_id,
           class_name: :Booking,
           dependent: :destroy

  has_many :reviews,
           primary_key: :id,
           foreign_key: :lodging_id,
           class_name: :Review,
           dependent: :destroy

  def ensure_default_image
    self.image_url ||= 'download_lrthtv.jpg'
  end

  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
        .where("lat > ?", bounds[:southWest][:lat])
        .where("lng > ?", bounds[:southWest][:lng])
        .where("lng < ?", bounds[:northEast][:lng])
  end

  def average_rating
    self.reviews.average(:rating).to_i
  end

  def number_of_ratings
    self.reviews.count
  end

end
