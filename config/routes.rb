Lydrew::Application.routes.draw do
	get "static_pages/home"

	root :to => 'static_pages#home'

	match '/about', to: 'static_pages#about'
	match '/blog', to: 'posts#index', as: :blog
end
