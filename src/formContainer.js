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
      <div class="mt-5 mx-auto w-50">
        <input id="search-field" class="form-control form-control-lg"  type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />

        <ul id="movie-list" class="list-group mt-3">
          {books.map(book => (<Book key={book.id} item= {book}/>))}
        </ul>
      </div>

    


    </div>
  );
};


export default InputForm;
