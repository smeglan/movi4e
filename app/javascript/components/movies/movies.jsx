import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios';
import MovieCard from './components/movie_card';
import { Container, Row } from 'react-bootstrap';
import SearchBar from '../shared/search_bar'
const Movies = () => {

    const [movies, setMovies] = useState([]);
    const [searchedMovie, setSearchedMovie] = useState([]);

    useEffect(() => {
        axios.get('/api/movies.json')
            .then(response => {
                setMovies(response.data.data);
            })
            .catch(e => console.log(e));
    }, [setMovies.length])

    const list = movies.map((item, i) => {
        return (
            <MovieCard key={item.attributes.title + i} movie={item.attributes} />
        )
    })
    return (
        <Fragment>
            <SearchBar></SearchBar>
            <Container style={{ width: "90%" }}>
                {searchedMovie.length > 0 &&
                    <div>
                        <div>
                            <h2>Searched movies</h2>
                        </div>
                        <Row>
                            {list}
                        </Row>
                    </div>
                }
                <div style={{ marginTop: 20 }}>
                    <h2>Lastest added</h2>
                </div>
                <Row>
                    {list}
                </Row>
            </Container>
        </Fragment>
    )
}

export default Movies;

