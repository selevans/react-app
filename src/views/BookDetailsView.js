import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import {Card, Button, Container} from 'react-bootstrap';
import { bookService } from '../services/BookService';
import { useHistory } from "react-router-dom";

const BookDetailsView = () => {
  let history = useHistory();
  let {id} = useParams();
  const [book, setBook] = useState({});

  useEffect(() => {
    const findBook = () => {
      bookService.findBookById(id)
      .then(function(response){
        setBook(...response.data);
      });
    };
    findBook();
  },[id]);

  return (
    <Container style={{marginTop: '20px'}} key= {book.id}> 
      <Button variant="dark" style={{float:'right', marginBottom:'20px'}} onClick={() => history.push('/Books/edit/' + book.id )}>Edit</Button>{' '}
      <Card border="dark" style={{ width: '70rem'}}>
        <Card.Body>
            <Card.Title><b>{book.title}</b>( {book.publisher}{book.publicationDate} )</Card.Title>
            <Card.Text>
              {book.summary}
            </Card.Text>
            <Card.Footer>
              <p>Language : {book.language}</p>
              <p>{book.author}</p>
            </Card.Footer>
        </Card.Body>
      </Card>
    </Container> 
  );
}

export default BookDetailsView;