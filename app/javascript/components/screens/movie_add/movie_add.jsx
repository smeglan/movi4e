import axios from 'axios';
import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useHistory } from 'react-router';

const MovieAdd = () => {
    const history = useHistory();
    const [title, setTitle] = useState("");
    const [overview, setOverview] = useState("");
    const [voteCount, setVoteCount] = useState("");
    const [dateRelease, setDateRelease] = useState("");
    const [file, setFile] = useState("");
    const [posterImage, setPosterImage] = useState(null);

    const openFile = (e) => {
        var input = e.target;
        setFile(e.target.value);
        var reader = new FileReader();
        reader.onload = function () {
            var dataURL = reader.result;
            setPosterImage(dataURL);
        };
        reader.readAsDataURL(input.files[0]);
    }

    const save = () => {
        const newMovie = {
            title,
            overview,
            vote_count: voteCount,
            release_date: dateRelease,
            poster_image: posterImage
        }
        axios.post("/api/movies", newMovie)
            .then(response => { console.log("OK!") })
            .catch(e => console.log(e))
    }

    return (
        <Container>
            <Button variant="outline-dark" onClick={() => history.push("/")} style={{ marginTop: 20 }}>Back</Button>
            <h2 className="text-center">Add new movie.</h2>
            <Form>
                <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Control value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Movie title" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Overview</Form.Label>
                    <Form.Control value={overview} onChange={(e) => setOverview(e.target.value)} placeholder="Description" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Vote count</Form.Label>
                    <Form.Control value={voteCount} onChange={(e) => setVoteCount(e.target.value)} placeholder="Number" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Release date</Form.Label>
                    <div className='input-group date'>
                        <input value={dateRelease} onChange={(e) => setDateRelease(e.target.value)} type='date' className="form-control" />
                    </div>
                </Form.Group>
                <Form.Group>
                    <Form.File value={file} onChange={openFile} accept="image/*" id="exampleFormControlFile1" label="Add image" />
                    {posterImage && <img src={posterImage} style={{ height: 200 }} />}
                </Form.Group>
                <Button variant="outline-success" onClick={save}>Save</Button>
            </Form>
        </Container>
    )
}

export default MovieAdd;