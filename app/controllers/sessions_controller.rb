class SessionsController < ApplicationController
    # before_action :redirect_if_authenticated, only: [:create, :new]

    def create
        user = User.find_by_credentials(
            params[:session][:email],
            params[:session][:password]
        )
        
        if user.nil?
            render json: "Credentials were wrong"
        else
            login!(user)
            redirect_to root_path
        end
    end

    def new
    end

    def destroy
        logout!
        redirect_to new_session_path  
    end
end