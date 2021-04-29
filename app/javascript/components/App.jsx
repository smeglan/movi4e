import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Movies from './movies/movies';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () =>{
    return (
        <Switch>
            <Route exact path="/" component={Movies}/>
        </Switch>
    )
}

export default App;