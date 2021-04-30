import axios from 'axios';
import React, { useState } from 'react';
import { Form, Button, FormControl } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';

const SearchBar = (props) => {
    const { setList } = props
    const [searchValue, setSearchValue] = useState("");
    const history = useHistory();
    const search = () => {
        const preparedSearch = searchValue.replace(" ", "+");
        axios.get("/api/search", { params: { title: preparedSearch } })
            .then(response => {
                setList(response.data)
            })
            .catch(e => console.log("error=>", e))
    }

    return (
        <div style={styles.container}>
            <Form inline>
                <FormControl value={searchValue} type="text" placeholder="Search" className="mr-sm-2" onChange={(e) => setSearchValue(e.target.value)} />
                <Button variant="outline-dark" onClick={search}>Search</Button>
                <Button variant="outline-dark" style={{ marginRight: 10, marginLeft: 10 }} onClick={() => history.push("/movie?title=" + searchValue)}>Search in DB</Button>
                <Button variant="outline-success" onClick={() => history.push('/add')}>Add</Button>
            </Form>
        </div>

    )
}

SearchBar.propTypes = {
    setList: PropTypes.func
}

SearchBar.defaultProps = {
    setList: () => { return [] }
}

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 30
    }
}

export default SearchBar;