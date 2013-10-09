class PostsController < ApplicationController
	def index
		@posts = Post.all.sort! { |a,b| b[:created_at] <=> a[:created_at] }
		@months ||= []
		@posts.each do |post|
			@months << [post.created_at.month, post.created_at.year]
		end
		@months = @months.uniq

	end
end
