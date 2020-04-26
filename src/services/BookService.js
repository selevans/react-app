import axios from "axios";

class BookService {
  findBooks() {
    return axios.get('/books');
  }

  findBooksByTitle(title) {
    return axios.get(`/books?title=${title}`);
  }

  findBookById(id){ 
    return axios.get(`/books?id=${id}`);
  }
  persist(book){
    return axios.post('/books', book);
  }

  update(book){
    return axios.put(`/books/${book.id}`, book);
  }
}


export const bookService = new BookService();