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
        
        
        console.log(data.items[0].volumeInfo)

        setBooks([...books, {
    
          title: books.title,
   
          publishedDate: books.publishedDate
        }]);
        console.log(books[0].title)
        
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