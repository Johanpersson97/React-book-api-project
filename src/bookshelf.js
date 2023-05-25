import React from 'react';

const Bookshelf = () => {
  // Retrieve books from local storage
  const storedBooks = localStorage.getItem('books');
  const books = JSON.parse(storedBooks) || [];

  return (
    <div>
      {books.length > 0 ? (
        <ul>
          {books.map(book => (
            <li key={book.id}>
              <h3>{book.title}</h3>
              <p>Author: {book.author}</p>
              <p>Published Date: {book.publishedDate}</p>
              <img src={book.thumbnail} alt={book.title} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No books found in the bookshelf.</p>
      )}
    </div>
  );
};

export default Bookshelf;