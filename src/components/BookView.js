import React, { useState } from 'react';
import {Col, Container, Row, Button} from 'react-bootstrap';
import Book from './Book';
import BookSearch from './BookSearch';


const BookView = ({books, onSearch}) => {
  
  return (
    <Container>
      <Row>
        <Col>
          <BookSearch onSearching={onSearch}/>      
          <Button variant="primary">Add a New Book</Button>{' '}  
        </Col>
      </Row>
      <Row>
          {
            books.map((book) => <Col  key={book.isbn}><Book book={book}/></Col>)
          }
      </Row>
    </Container>
  )
};


export default BookView;