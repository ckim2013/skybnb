class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @user
      login!(@user)
      render 'api/users/show'
    else
      render json: ['Invalid email/password combination!'], status: :unprocessable_entity
    end
  end

  def destroy
    if !logged_in?
      render json: 'User is already signed out!'
    else
      logout!
      render json: ['Successfully logged out!']
    end
  end
end
