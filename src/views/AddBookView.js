import React from 'react';
import {Form, Button, Container} from 'react-bootstrap';

const AddBookView = () => {

    return (
        <Container style= {{marginTop: '30px'}}>
            <Form>
                <Form.Group >
                    <Form.Label>Book Title</Form.Label>
                    <Form.Control type="text" placeholder=" Title" />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Book Author</Form.Label>
                    <Form.Control type="text" placeholder=" Author" />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Book Publisher</Form.Label>
                    <Form.Control type="text" placeholder=" Publisher" />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Number of Pages</Form.Label>
                    <Form.Control type="text" placeholder=" Number of Pages" />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Book Language</Form.Label>
                    <Form.Control type="text" placeholder=" Language " />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Book summary</Form.Label>
                    <Form.Control as="textarea" rows="3" placeholder="Summary" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>     
        </Container>
    );
}

export default AddBookView;