Rails.application.routes.draw do
  mount Rswag::Ui::Engine => '/api-docs'
  mount Rswag::Api::Engine => '/api-docs'

  namespace :api do
    namespace :v1 do
      get 'listings/:quarter/:age_group_slug', to: 'listings#index', as: :listings
    end
  end

  root 'static_pages#home'
  get '/help', to: 'static_pages#help'
  get '/about', to: 'static_pages#about'
  get '/privacy', to: 'static_pages#privacy'
  get '/status', to: 'import#info'
  get '/import', to: 'import#upload'
  post '/import', to: 'import#import'
  get '/players', to: 'players#index'
  get '/player/:id', to: 'players#show', as: :player
  get '/listings', to: 'listing#index'
  get '/clubs', to: 'clubs#index'
  get '/club/:id', to: 'clubs#show', as: :club, constraints: { id: /.+/ }
  get '/federations', to: 'federations#index'
  get '/login', to: 'sessions#new'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  resources :import do
    collection { post :import }
  end
end
