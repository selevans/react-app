import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import BookView from './views/BookView';
import { bookService } from './services/BookService';
import { Container, Row, Col } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import BookDetailsView from './views/BookDetailsView';
import AddBookView from './views/AddBookView';
import EditBookView from './views/EditBookView';

function App() {
  const [books, setBooks] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {

    const findBooks = () => {
      bookService.findBooks()
      .then(function (response) {
        setBooks(response.data);
      });
    };

    const findByTitle = () => {
      bookService.findBooksByTitle(searchValue)
      .then(function (response) {
        setBooks(response.data);
      });
    };

    const searchBook = () => {
      if(searchValue.length === 0) {
        findBooks();
      } else {
        findByTitle(searchValue);
      }
    };

    searchBook();
  }, [searchValue]);

  return (
    <Router>
    <Container fluid>
      <Row>
        <Col>
          <Header/>
        </Col>
      </Row>
      <Row>
        <Col>
          <Container>
            <Switch>
              <Route path="/" exact>
                <BookView books={books} onSearch={(bookName) => setSearchValue(bookName)}/>
              </Route>        
              <Route path="/books/add" exact>
                <AddBookView />
              </Route>
              <Route path="/books/edit/:id" exact>
                <EditBookView />
              </Route>        
              <Route path="/books/:id" exact>
                <BookDetailsView />
              </Route>
             </Switch>
          </Container>
        </Col>
      </Row>
    </Container>
    </Router>
  );
}

export default App;
