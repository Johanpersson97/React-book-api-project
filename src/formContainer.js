import React, { useState } from 'react';
import Book from './bookListItem';

// Hanterar api-anrop, bygger objekt av svaret och presenterar dessa i en lista
const InputForm = () => {
  const apiKey = 'AIzaSyCnBU2K5epe8KRSljZmLjfF0KcMh_uueCA';

  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([]);

  // Om inputrutan har mer än 2 bokstäver eller siffror ska apiet anropas 
  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);

    if (value.length > 1) {
      handleSearch(value);
    } else {
      setBooks([]);
    }
  };

  // Hanterar anropet till API
  const handleSearch = (searchTerm) => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        const books = data.items.map(item => item.volumeInfo);
        console.log(books)
 
        const newBooks = books.map((book) => {
          let trimmedAuthors;
        
          if (book.authors) {
            // Kolla om det finns flera författare
            if (Array.isArray(book.authors)) {
              trimmedAuthors = book.authors.join(", ");
            } else {
              // Om det bara finns en författare, använd författarens namn direkt
              trimmedAuthors = book.authors;
            }
          } else {
            //Om det ej finns författare returneras en tom sträng 
            trimmedAuthors = "";
          }
        
          return {
            title: book.title,
            authors: trimmedAuthors,
            publishedDate: book.publishedDate,
            img: book.imageLinks?.thumbnail,
            smallImg: book.imageLinks?.smallThumbnail,
            bookInfo: book.description,
            grade: 0,
            hasRead: false,
          };
        });
        

        setBooks(newBooks);
      })
      .catch(error => {
        console.error(error);
      });
  };

  // Returnerar listan med böcker vi hämtat från apiet
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
            <Book key={book.id} item={book}/>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InputForm;
