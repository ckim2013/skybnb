class Api::LodgingsController < ApplicationController
  def index
    # @lodgings = if params[:filter]
    #               field = params[:filter]
    #               Lodging.where(field: field)
    #             else
    #               Lodging.all
    #             end
    @lodgings = Lodging.all
    render :index
  end

  def create
    @lodging = current_user.lodgings.new(lodging_params)
    if @lodging.save
      render 'api/lodgings/show'
    else
      render json: @lodging.errors.full_messages, status: :unprocessable_entity
    end
  end

  def show
    @lodging = Lodging.find_by(id: params[:id])
    if @lodging
      render :show
    else
      render json: ['Lodging does not exist, why not make one??'],
             status: :unprocessable_entity
    end
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
    @lodging = Lodging.find_by(id: params[:id])
    @lodging.destroy
    render json: ['Successfully deleted lodging! Hopefully not the real one!']
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
