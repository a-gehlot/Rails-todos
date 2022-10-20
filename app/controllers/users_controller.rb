class UsersController < ApplicationController
    before_action :require_current_user!, except: [:create, :new]
    
    def new
        @user = User.new
    end

    def create
        @user = User.new(user_params)
        if @user.save
            session[:user_id] = @user.id
            redirect_to root_path, notice: 'Successfully created'
        else
            flash[:alert] = @user.errors.full_messages
            render :new
        end
    end

    private
    def user_params
        params.require(:user).permit(:email, :password, :password_digest)
    end
end