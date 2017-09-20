class Api::LodgingsController < ApplicationController
  def index
  end

  def create
  end

  def show
    @lodging = Lodging.find_by(id: params[:id])
    render :show
  end

  def update
    @lodging = Lodging.find_by(id: params[:id])
    if @lodging.update_attributes(lodging_params)
      render 'api/lodgings/show'
    else
      render json: @lodging.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
  end

  private
  def lodging_params
    params.require(:lodging)
      .permit(:title, :street, :city, :country,
              :image_url, :rate, :room_type, :beds,
              :bedrooms, :bathrooms, :guests, :check_in,
              :amenities, :bio)
  end
end
