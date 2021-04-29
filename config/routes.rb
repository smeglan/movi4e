Rails.application.routes.draw do
  root 'pages#index'
  namespace :api do
    resources :movies, params: :title
  end
  get '*path', to: 'pages#index', via: :all
end
