Lydrew::Application.routes.draw do
	get "static_pages/home"

	root :to => 'static_pages#home'

	match '/about', to: 'static_pages#about'
	match '/blog', to: 'posts#index', as: :blog
	match '/blog/:id', to: 'posts#show', as: :blog_single_post
	match '/blog/archive/:month/:year', to: 'posts#show_month', as: :blog_show_month
end
