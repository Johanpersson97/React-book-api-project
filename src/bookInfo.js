import React from 'react';
import StarRating from './rating';

export default function BookInfo(props) {

  const img = props.item.smallImg !== undefined ? props.item.smallImg : require("./undefined.png")
  const authors = props.item.authors;
  console.log(authors)


  const SaveBook = () => {
    const storedBooks = localStorage.getItem('books');
    const books = storedBooks ? JSON.parse(storedBooks) : [];

    
    // Add book to list 
    books.push(props.item);
    // Save books to localstorage 
    localStorage.setItem('books', JSON.stringify(books));
    alert('Saved');
  };
  
  return (
    <div>
      <div className="modal" id="bookModal" role="dialog" tabindex="-1" style={{ display: "block" }}>
        <div className="modal-dialog modal-lg">
          <div className="modal-content bg-dark">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">

              <p>{authors}</p>
              <img className="me-2" src={img} />

              <StarRating />
              
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={SaveBook}>
                Save to bookshelf
                </button>
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={props.closeModal}>Close</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

