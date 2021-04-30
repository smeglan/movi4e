class MovieSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :overview, :vote_count, :poster_path, :release_date, :poster_image
end
