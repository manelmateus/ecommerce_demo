Rails.application.routes.draw do
  get 'orders/totalRevenue', :to => 'orders#totalRevenue'
  resources :orders
  resources :products
  resources :attributes
  resources :tags
  resources :categories
  get 'popular/products', :to => 'products#popular_products'
  get 'category/:cat/products', :to => 'products#products_by_category'
  post 'payment', :to => 'payments#payment'
  get 'users',   :to => 'users#index'
  delete 'user/:id', :to => 'users#destroy'

  devise_for :users,
             controllers: {

                 sessions: 'users/sessions',
                 registrations: 'users/registrations'
             }
  root 'store#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
