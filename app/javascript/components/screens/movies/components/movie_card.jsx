import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router';

const MovieCard = (props) => {
    const { movie } = props;
    const history = useHistory();
    const getPath = ()=>{
        if(movie.poster_path){
            return "https://image.tmdb.org/t/p/w500" + movie.poster_path;
        }else if(movie.poster_image){
            return movie.poster_image;
        }else{
            return "https://farm5.staticflickr.com/4363/36346283311_74018f6e7d_o.png"
        }
    }
    const path = getPath();
    return (
        <Card onClick={() => history.push("/movie?title=" + movie.title)} className="card" data-toggle="tooltip" data-placement="top" title={"Go to " + movie.title} style={{ width: '10rem', margin: 5 }}>
            <Card.Img variant="top" src={path} />
            <Card.Title style={{ marginBottom: 0 }} className="text-center">{movie.title}</Card.Title>
            <Card.Text style={{ color: 'c3c3c3' }} className="text-center">{movie.release_date}</Card.Text>
        </Card>
    )
}

export default MovieCard;