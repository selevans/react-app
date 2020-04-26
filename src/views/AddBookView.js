import React,{useState} from 'react';
import {Container,Form, Button} from 'react-bootstrap';
import { bookService } from '../services/BookService';
import { useHistory } from "react-router-dom";


const AddBookView = () => {

    let history = useHistory();
    const [book,setBook] = useState({});

    const changeValue = (event) => {
        let newBook = book ;
        newBook[event.target.name] = event.target.value;
        setBook(newBook);
    }

    const AddBook = (event) => {
        event.preventDefault();
        const uuidv4 = require('uuid/v4');
        let id = uuidv4();
        book.id = id;
        book.isbn = id;
        bookService.persist(book)
          .then(() => {
            history.push('/');
          })
    }
    return (
        <Container style= {{marginTop: '30px'}}>
            <Form onSubmit = {AddBook}>
                <Form.Group >
                    <Form.Label>Book Title</Form.Label>
                    <Form.Control name="title" type="text" placeholder=" Title" value={book.title} onChange={changeValue}/>
                </Form.Group>
                <Form.Group >
                    <Form.Label>Book Author</Form.Label>
                    <Form.Control name="author" type="text" placeholder=" Author" value={book.author} onChange={changeValue}/>
                </Form.Group>
                <Form.Group >
                    <Form.Label>Book Publisher</Form.Label>
                    <Form.Control name="publisher" type="text" placeholder=" Publisher" value={book.publisher} onChange={changeValue}/>
                </Form.Group>
                <Form.Group >
                    <Form.Label>Number of Pages</Form.Label>
                    <Form.Control name="pages" type="text" placeholder=" Number of Pages" value={book.numberOfPages} onChange={changeValue}/>
                </Form.Group>
                <Form.Group >
                    <Form.Label>Book Language</Form.Label>
                    <Form.Control name="language" type="text" placeholder=" Language " value={book.language} onChange={changeValue}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Book summary</Form.Label>
                    <Form.Control name="summary" as="textarea" rows="3" placeholder="Summary" value={book.summary} onChange={changeValue}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form> 
        </Container>
    );
}

export default AddBookView;