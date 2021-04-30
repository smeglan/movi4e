module Api
    class MoviesController < ApplicationController
        protect_from_forgery with: :null_session
        def index
            movies = Movie.all
            render json: MovieSerializer.new(movies).serialized_json
        end

        def search
            response = HTTParty.get("https://api.themoviedb.org/3/search/movie?api_key=9e26770b0f7e27309bf3e0ea0263e199&language=en-US&query="+params[:title])
            newMovies = Array.new
            response["results"].each do |movie|
                newMovie = {
                    "title"=> movie["title"], 
                    "overview"=> movie["overview"], 
                    "vote_count"=> movie["vote_count"], 
                    "poster_path"=> movie["poster_path"], 
                    "release_date"=> movie["release_date"]
                }
                newMovies.push(newMovie)
            end
            Movie.import newMovies, validate: true
            render json: newMovies
        end

        def show
            movie = Movie.find_by(title: params[:title])
            puts "show"
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

        def destroy
            movie = Movie.find_by(title: params[:title])
            if movie.destroy
                head :no_content
            else
                render json: {error: movie.error.message}, status: 422
            end
        end

        def movie_params
            params.require(:movie).permit(:title, :overview, :vote_count, :poster_path, :release_date, :poster_image)
        end
    end
end