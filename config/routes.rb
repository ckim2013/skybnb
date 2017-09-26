Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: %i{create update show}
    resource :session, only: %i{create destroy}
    resources :lodgings, only: %i{index create show update destroy}
    resources :bookings, only: %i{index create show destroy}

    get '/lodgingssearch', to: 'lodgings#lodgingssearch'
  end
end
