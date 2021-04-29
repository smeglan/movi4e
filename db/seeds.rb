# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

movies = Movie.create(
    [
        {
            :title => "Fight Club",
            :overview =>"A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
            :vote_count =>21606,
            :poster_path =>"/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
            :release_date => Date.parse("1999/10/15"),
        },
        {
            :title => "D.E.B.S.",
            :overview =>"The star of a team of teenage crime fighters falls for the alluring villainess she must bring to justice.",
            :vote_count =>360,
            :poster_path =>"/cMwLTcG5aVBYeh5W6SVSfowboAf.jpg",
            :release_date => Date.parse("2004/01/21"),
        }
    ]
)