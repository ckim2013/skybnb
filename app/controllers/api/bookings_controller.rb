class Api::BookingsController < ApplicationController
  #
  # def index
  #   @bookings = Booking.all.includes(:owner)
  #   if @bookings.empty?
  #     render json: ['There are no bookings'], status: :unprocessable_entity
  #   else
  #     render :index
  #   end
  # end
  #
  # def create
  #   @booking = current_user.bookings.new(booking_params)
  #   if @booking.save
  #     render :show
  #   else
  #     render json: @booking.errors.full_messages, status: :unprocessable_entity
  #   end
  # end
  #
  # def show
  #   @booking = current_user.bookings.includes(:booker).where(id: params[:id]).first
  #   if @booking
  #     render :show
  #   else
  #     render json: ['Booking does not exist, time for you to go on a trip!'],
  #            status: :unprocessable_entity
  #   end
  # end
  #
  # def destroy
  #   @booking = Lodging.find_by(id: params[:id])
  #   @booking.destroy
  #   render :show
  # end
  #
  # private
  #
  # def booking_params
  #   params.require(:booking).permit(:start_date, :end_date,
  #                                   :booker_id, :lodging_id)
  # end
end
