# README

**You may need**.
* Ruby version ^2.7.x 
* Rails version ^6.1.x 
* Node.js version ^12.x
* Postgress SQL

You need actualized

**Database creation**

> rails db:create

**Database initialization**

> rails db:migrate

**Note**: opcionally if you want some examples run 

> rails db:seed

**Api info** (job queues, cache servers, search engines, etc.)

|Prefix|Verb|URI Pattern|Controller#Action
| --- | --- | --- |
|api_movies | GET  |  /api/movies(.:format) | api/movies#index {:params=>:title}|
|           | POST | /api/movies(.:format)  | api/movies#create {:params=>:title}|
|new_api_movie| GET |   /api/movies/new(.:format) |  api/movies#new {:params=>:title}
|edit_api_movie| GET |   /api/movies/:id/edit(.:format)   | api/movies#edit {:params=>:title}
|api_movie |GET  |  /api/movies/:id(.:format)  | api/movies#show {:params=>:title}
|          |PATCH | /api/movies/:id(.:format)  | api/movies#update {:params=>:title}
|          |PUT |   /api/movies/:id(.:format)   | api/movies#update {:params=>:title}
|          |DELETE | /api/movies/:id(.:format)   | api/movies#destroy {:params=>:title}
|api_search| GET  |  /api/search(.:format)  | api/movies#search {:params=>:title}

**Deployment**

>rails s

**or**

>ruby bin/rails server
