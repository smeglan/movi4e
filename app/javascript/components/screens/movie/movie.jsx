import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Movie = () => {
    let query = useQuery();
    const history = useHistory();
    const [item, setItem] = useState(null)
    const [path, setPath] = useState(null)

    useEffect(() => {
        const title = query.get("title")
        console.log(title)
        axios.get("/api/movies/id?title=" + title)
            .then(response => {
                console.log(response.data)
                if (response.data.data) {
                    setItem(response.data.data.attributes)
                }
            })
            .catch(e => console.log(e));
    }, [])

    useEffect(() => {
        const newPath = getPath()
        setPath(newPath)
    }, [item])

    const getPath = () => {
        if (item) {
            if (item.poster_path) {
                return "https://image.tmdb.org/t/p/w500" + item.poster_path;
            } else if (item.poster_image) {
                return item.poster_image;
            } else {
                return "https://farm5.staticflickr.com/4363/36346283311_74018f6e7d_o.png"
            }
        }
        return "https://farm5.staticflickr.com/4363/36346283311_74018f6e7d_o.png"
    }

    if (item) {
        return (
            <Container>
                <Button variant="outline-dark" onClick={() => history.push("/")} style={{ marginTop: 20 }}>Back</Button>
                <Row style={{ marginTop: 20 }}>
                    <Col>
                        <Image src={path} />
                    </Col>
                    <Col>
                        <h2>{item.title}</h2>
                        <br />
                        <label style={{ color: "#c3c3c3" }}><b>Release date: </b>{item.release_date}</label>
                        <br />
                        <label><b>Overview: </b>{item.overview}</label>
                        <br />
                        <label><b>Vote count: </b>{item.vote_count}</label>
                    </Col>
                </Row>
            </Container>
        )
    } else {
        return (
            <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
                <h1>We couldn't find your movie :C</h1>
                <Button  style={{alignSelf:'center'}} variant="outline-success" onClick={() => history.push('/')}>Back to search</Button>
            </div>

        )

    }

}

export default Movie;