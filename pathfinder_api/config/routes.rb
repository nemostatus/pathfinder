Rails.application.routes.draw do
  root to: "static#home"
  resources :users
  resources :games
  resources :sessions, only: [:create]
  resources :registration, only: [:create]
  delete :logout, to: "sessions#logout"
  get :logged_in, to: "sessions#logged_in"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
