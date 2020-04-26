import React,{useState} from 'react';
import  {Form, Button} from 'react-bootstrap';

const BookForm = ({onSubmit}) => {

    const [book,setBook] = useState({});
    
    const changeValue = (event) => {
        let newBook = book ;
        newBook[event.target.name] = event.target.value;
        setBook(newBook);
    }

    const handleBook = () => {
        onSubmit(book);
    } 

    return (
        <Form onSubmiting = {handleBook}>
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
            <Form.Control name="pages" type="text" placeholder=" Number of Pages" value={book.numberOfPages} changeValue={changeValue}/>
        </Form.Group>
        <Form.Group >
            <Form.Label>Book Language</Form.Label>
            <Form.Control name="language" type="text" placeholder=" Language " value={book.language} changeValue={changeValue}/>
        </Form.Group>
        <Form.Group>
            <Form.Label>Book summary</Form.Label>
            <Form.Control name="summary" as="textarea" rows="3" placeholder="Summary" value={book.summary} changeValue={changeValue}/>
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
    </Form> 
    );
}

export default BookForm;
