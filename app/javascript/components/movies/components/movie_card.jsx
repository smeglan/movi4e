import React from 'react';
import { Card } from 'react-bootstrap';

const MovieCard = (props) => {
    const { movie } = props;

    return (
        <Card style={{ width: '10rem', margin: 5 }}>
            <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} />
            <Card.Title style={{ marginBottom: 0 }} className="text-center">{movie.title}</Card.Title>
            <Card.Text style={{ color: 'c3c3c3' }} className="text-center">{movie.release_date}</Card.Text>
        </Card>
    )
}

export default MovieCard;