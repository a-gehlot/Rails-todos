Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]
  namespace :api do
    resources :todos, defaults: { format: :json }
    resources :steps, defaults: { format: :json }
  end
  root to: 'static_pages#root'
end
