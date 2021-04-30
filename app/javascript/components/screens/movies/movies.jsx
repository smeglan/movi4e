import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios';
import MovieCard from './components/movie_card';
import { Container, Row } from 'react-bootstrap';
import SearchBar from '../../shared/search_bar'
const Movies = () => {

    const [movies, setMovies] = useState([]);
    const [searchedMovies, setSearchedMovies] = useState([]);

    useEffect(() => {
        axios.get('/api/movies.json')
            .then(response => {
                const data = response.data.data
                setMovies(data.reverse());
            })
            .catch(e => console.log(e));
    }, [setMovies.length, searchedMovies])

    const list = movies.map((item, i) => {
        return (
            <MovieCard key={item.attributes.title + i} movie={item.attributes} />
        )
    })
    return (
        <Fragment>
            <SearchBar setList={setSearchedMovies}></SearchBar>
            <Container style={{ width: "90%" }}>
                {searchedMovies && searchedMovies.length > 0 &&
                    <div>
                        <div>
                            <h2>Searched movies</h2>
                        </div>
                        <Row>
                            {
                                searchedMovies.map((item, i) => {
                                    return (
                                        <MovieCard key={item.title + i} movie={item} />
                                    )
                                })
                            }
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

