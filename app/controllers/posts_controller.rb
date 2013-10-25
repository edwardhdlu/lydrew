class PostsController < ApplicationController
	def index
		@posts = Post.all.sort! { |a,b| b[:created_at] <=> a[:created_at] }
		@months ||= []
		@posts.each do |post|
			@months << [post.created_at.month, post.created_at.year]
		end
		@months = @months.uniq

	end

	def show
		@post = Post.find_by_id(params[:id])
	end

	def show_month
		@posts_temp = Post.all.sort! { |a,b| b[:created_at] <=> a[:created_at] }
		@months ||= []
		@posts_temp.each do |post|
			@months << [post.created_at.month, post.created_at.year]
		end
		@months = @months.uniq

		@posts ||= []
		Post.all.each do |post|
			if params[:year].to_i == post.created_at.year && params[:month].to_i == post.created_at.month
				@posts << post
			end
		end
		render 'index'
	end
end
