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
#

class Lodging < ApplicationRecord
  validates :owner_id, :title, :street, :city, :country, :image_url, :rate,
            :room_type, :beds, :bedrooms, :bathrooms, :guests, :check_in,
            presence: true

  validates_uniqueness_of :street, scope: %i{city country}

  validates :room_type, inclusion: {
    in: ['Private Room', 'Shared Room', 'Entire House']
  }

  after_initialize :ensure_default_image

  belongs_to :owner,
             primary_key: :id,
             foreign_key: :owner_id,
             class_name: :User

  def ensure_default_image
    self.image_url ||= 'download_lrthtv.jpg'
  end
end
