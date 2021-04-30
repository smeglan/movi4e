import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Movies from './screens/movies/movies';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movie from './screens/movie/movie';
import MovieAdd from './screens/movie_add/movie_add';

const App = () =>{
    return (
        <Switch>
            <Route path="/add" component={MovieAdd}/>
            <Route path="/movie" component={Movie}/>
            <Route path="/" component={Movies}/>
        </Switch>
    )
}

export default App;