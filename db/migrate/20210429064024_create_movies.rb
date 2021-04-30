class CreateMovies < ActiveRecord::Migration[6.1]
  def change
    create_table :movies do |t|
      t.string :title
      t.string :overview
      t.integer :vote_count
      t.string :poster_path
      t.date :release_date
      t.binary :poster_image
      t.timestamps
    end
  end
end
