import React, { useState} from 'react';
import Book from './bookListItem';

const InputForm = () => {
  const apiKey = 'AIzaSyCnBU2K5epe8KRSljZmLjfF0KcMh_uueCA';
 
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([]);

  

  const handleSearch = () => {
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
      <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
      <button onClick={handleSearch}>Sök</button>

      <ul>
        {books.map(book => (<Book key={book.id} item= {book}/>))}
      </ul>

    


    </div>
  );
};


export default InputForm;