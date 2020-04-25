import axios from "axios";

class BookService {
  findBooks() {
    return axios.get('/books');
  }

  findBooksByTitle(title) {
    return axios.get(`/books?title=${title}`);
  }

  findBookByIsbn(isbn){ 
    return axios.get(`/books?isbn=${isbn}`);
  }
  persist(book){
    return axios.post('/books', book);
  }
}


export const bookService = new BookService();