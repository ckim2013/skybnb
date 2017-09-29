class Api::ReviewsController < ApplicationController

  def create
    @review = current_user.reviews.new(review_params)
    if !(current_user.lodgings.find_by(id: params[:review][:lodging_id]) == nil)
      render json: ['You cannot review your own place!'], status: :unprocessable_entity
    elsif @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @review = Review.find_by(id: params[:id])
    @review.destroy
    render :show
  end

  private

  def review_params
    params.require(:review).permit(:title, :body, :lodging_id, :author_id,
                                   :rating)
  end

end
