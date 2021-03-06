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

require 'test_helper'

class LodgingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
