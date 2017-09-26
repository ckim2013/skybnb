class Api::BookingsController < ApplicationController

  def index
    @bookings = current_user.bookings.includes(:lodging)
    render :index
    # @bookings = Booking.all.includes(:lodging)
    # if @bookings.empty?
    #   render json: ['There are no bookings']
    # else
    #   render :index
    # end
  end

  def create
    @booking = current_user.bookings.new(booking_params)
    lodging = Lodging.find_by(id: @booking.lodging_id)
    if @booking.booker_id == lodging.owner_id
      render json: ['Cannot book your own place!'], status: :unprocessable_entity
    elsif @booking.save
      render :show
    else
      render json: @booking.errors.full_messages, status: :unprocessable_entity
    end
  end

  # Might not do a show. whats the point when you can get the information
  # from the index
  # def show
  #   @booking = Booking.includes(:lodging).where(id: params[:id]).first
  #   if @booking
  #     render :show
  #   else
  #     render json: ['Booking does not exist, time for you to go on a trip!'],
  #            status: :unprocessable_entity
  #   end
  # end

  def destroy
    @booking = Lodging.find_by(id: params[:id])
    @booking.destroy
    render :show
  end

  private

  def booking_params
    params.require(:booking).permit(:start_date, :end_date,
                                    :booker_id, :lodging_id)
  end
end
