class UsersController < ApplicationController
  before_action :authenticate_user!
  def index
    @users = User.all

    render json: @users
  end

  def destroy
    @user = User.find(params[:id])

    @user.destroy
  end
end
