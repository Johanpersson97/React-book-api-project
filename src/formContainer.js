import React, { useState } from 'react';
import Book from './bookListItem';

const InputForm = () => {
  const apiKey = 'AIzaSyCnBU2K5epe8KRSljZmLjfF0KcMh_uueCA';

  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([]);

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);

    if (value.length > 1) {
      handleSearch(value);
    } else {
      setBooks([]);
    }
  };

  const handleSearch = (searchTerm) => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        const books = data.items.map(item => item.volumeInfo);
        console.log(books)

        var newId = books.length > 0 ? books[books.length - 1].id + 1 : 1;
        const newBooks = books.map(book => ({
          id: newId++,
          title: book.title,
          authors: book.authors,
          publishedDate: book.publishedDate,
          img: book.imageLinks?.thumbnail
        }));

        setBooks(newBooks);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="mt-5 mx-auto w-50">
        <input
          id="search-field"
          className="form-control form-control-lg"
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
        />

        <ul id="book-list" className="list-group mt-3">
          {books.map(book => (
            <Book key={book.id} item={book} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InputForm;
