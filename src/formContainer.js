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
        console.log(data.items)
        setBooks(data.items);
        console.log(data.items[0].volumeInfo.title);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
      <button onClick={handleSearch}>Sök</button>



    


    </div>
  );
};


export default InputForm;