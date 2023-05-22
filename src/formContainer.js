import React, { useState, useRef } from 'react';
import Book from './bookListItem';

const InputForm = () => {
  const apiKey = 'AIzaSyCnBU2K5epe8KRSljZmLjfF0KcMh_uueCA';

  const [searchTerm, setSearchTerm] = useRef('');
  const [books, setBooks] = useState([]);

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);

    if (value.length > 2) {
      searchTerm.current.value
      handleSearch({searchTerm})
    }
  };

  const handleSearch = (searchTerm) => {
    // API anrop


    fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        const books = data.items.map(item =>item.volumeInfo);
        
        var newId = books.length > 0 ?books[books.length - 1].id + 1 : 1;
        console.log(data.items[1].volumeInfo)
        const newBooks = books.map(book=> ({
          id: newId++,
          title: book.title,
          authors: book.authors,
          publishedDate: book.publishedDate,
          img: book.imageLinks?.thumbnail
        }))
        console.log(newBooks);
        setBooks(prevBooks=> [...prevBooks, ...newBooks]);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <div class="mt-5 mx-auto w-50">
        <input id="search-field" class="form-control form-control-lg"  type="text" ref={searchTerm} onKeyUp={handleSearchChange} />

        <ul id="movie-list" class="list-group mt-3">
          {books.map(book => (<Book key={book.id} item= {book}/>))}
        </ul>
      </div>

    


    </div>
  );
};


export default InputForm;
