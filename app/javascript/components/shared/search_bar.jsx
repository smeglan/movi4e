import React from 'react';
import { Form, Button, FormControl } from 'react-bootstrap';

const SearchBar = () => {
    return (
        <div style={styles.container}>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
            </Form>
        </div>

    )
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