class Api::LodgingsController < ApplicationController
  def index
    if params[:bounds]
      @lodgings = Lodging.in_bounds(params[:bounds])
    else
      @lodgings = Lodging.all
    end

    render :index

    # if @lodgings.empty?
    #   render json: ['There are no lodgings at all!'],
    #          status: :unprocessable_entity
    # else
    #   render :index
    # end
  end

  def create
    @lodging = current_user.lodgings.new(lodging_params)
    if @lodging.save
      render :show
    else
      render json: @lodging.errors.full_messages, status: :unprocessable_entity
    end
  end

  def show
    @lodging = Lodging.includes(:owner).where(id: params[:id]).first
    if @lodging
      render :show
    else
      render json: ['Lodging does not exist, why not make one??'],
             status: :unprocessable_entity
    end
  end

  def update
    @lodging = current_user.lodgings.find_by(id: params[:id])
    if @lodging
      if @lodging.update_attributes(lodging_params)
        render :show
      else
        render json: @lodging.errors.full_messages,
               status: :unprocessable_entity
      end
    else
      render json: ['You are not allowed to edit this post!']
    end
  end

  def destroy
    @lodging = Lodging.find_by(id: params[:id])
    @lodging.destroy
    render :show
  end

  def lodgingssearch
    lodgings_by_street = Lodging
      .where("LOWER(street) LIKE ?", "%#{params[:query]}%".downcase)
    lodgings_by_city = Lodging
      .where("LOWER(city) LIKE ?", "%#{params[:query]}%".downcase)
    lodgings_by_country = Lodging
      .where("LOWER(country) LIKE ?", "%#{params[:query]}%".downcase)
    @lodgings = lodgings_by_street + lodgings_by_city + lodgings_by_country
    render :index
  end

  private

  def lodging_params
    params[:lodging][:amenities] ||= []
    params.require(:lodging)
      .permit(:title, :street, :city, :country, :image_url, :rate,
              :room_type, :beds, :bedrooms, :bathrooms, :guests, :check_in,
              :bio, :lat, :lng, amenities: [])
  end
end
