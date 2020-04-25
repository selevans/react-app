import React from 'react';
import { Card } from 'react-bootstrap';


const Book = ({book}) => {
  return (
    <Card style={{ width: '18rem' }}>
        <Card.Header><a href={'/books/' + book.isbn} style={{textDecoration:'none'}}>{book.title}</a></Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              {book.summary}
            </p>
          </blockquote>
        </Card.Body>
      </Card>
  )
}

export default Book;