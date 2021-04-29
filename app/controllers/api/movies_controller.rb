module Api
    class MoviesController < ApplicationController
        def index
            movies = Movie.all
            render json: MovieSerializer.new(movies).serialized_json
        end

        def show
            movie = Movie.find_by(title: params[:title])
            render json: MovieSerializer.new(movie).serialized_json
        end

        def create
            movie = Movie.new(movie_params)
            if movie.save
                render json: MovieSerializer.new(movie).serialized_json
            else
                render json: {error: movie.error.message}, status: 422
            end
        end

        def update
            movie = Movie.find_by(title: params[:title])
            if movie.update(movie_params)
                render json: MovieSerializer.new(movie).serialized_json
            else
                render json: {error: movie.error.message}, status: 422
            end
        end

        def update
            movie = Movie.find_by(title: params[:title])
            if movie.destroy
                head :no_content
            else
                render json: {error: movie.error.message}, status: 422
            end
        end

        def movie_params
            params.require(:movie).permit(:title, :overview, :vote_count, :poster_path, :release_date)
        end
    end
end