class SessionsController < ApplicationController
    def create
        user = User.find_by(username: params["user"]["username"]).try(:authenticate, params["user"]["password"])
        if user
           session[:user_id] = user.id
    end 
end 