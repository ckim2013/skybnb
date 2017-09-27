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
  validate :start_date_after_end_date
  validate :after_current_date
  validate :ensure_no_overlapping_bookings

  belongs_to :lodging,
             primary_key: :id,
             foreign_key: :lodging_id,
             class_name: :Lodging

  belongs_to :booker,
             primary_key: :id,
             foreign_key: :booker_id,
             class_name: :User

  def start_date_after_end_date
    unless (self.start_date <=> self.end_date) == -1
      errors[:base] << 'Start date must be after end date'
    end
  end

  def after_current_date
    if self.start_date
      unless self.start_date >= Date.today
        errors[:base] << 'Time travel exists?'
      end
    end
  end

  def duration_of_stay
    (self.end_date - self.start_date).to_i
  end

  def total_cost
    self.lodging.rate * self.duration_of_stay
  end

  def ensure_no_overlapping_bookings
    unless overlapping_bookings.empty?
      errors[:base] << 'Time range has already been booked!'
    end
  end

  def overlapping_bookings
    Booking
      .where.not(id: self.id)
      .where(lodging_id: lodging_id)
      .where(<<-SQL, start_date: start_date, end_date: end_date)
        NOT( (start_date > :end_date) OR (end_date < :start_date) )
      SQL
  end
end
