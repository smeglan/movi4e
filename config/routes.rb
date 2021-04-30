Rails.application.routes.draw do
  root 'pages#index'
  namespace :api do
    resources :movies, params: :title
    get '/search', to: "movies#search", params: :title
  end
  get '*path', to: 'pages#index', via: :all
end
