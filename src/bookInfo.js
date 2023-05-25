import React from 'react';
import StarRating from './rating';

export default function BookInfo(props) {

  const img = props.item.smallImg !== undefined ? props.item.smallImg : require("./undefined.png")
  const authors = props.item.authors;
  console.log(authors)

  const SaveBook = () => {
    const storedBooks = localStorage.getItem('books');
    const books = storedBooks ? JSON.parse(storedBooks) : [];

    const bookExists = books.some((book) => book.title === props.item.title && book.publishedDate === props.item.publishedDate);
    if (!bookExists) {
      // Add book to list 
      books.push(props.item);
      // Save books to localstorage 
      localStorage.setItem('books', JSON.stringify(books));
      alert('Saved');
    } else { 
      alert('Already in you bookshelf!');
    }
  };

  return (
    <div>
      <div className="modal" id="bookModal" role="dialog" tabindex="-1" style={{ display: "block" }}>
        <div className="modal-dialog modal-lg">
          <div className="modal-content bg-dark">
            <div className="modal-body">
              <h1 className="modal-title" id="exampleModalLabel">{authors}</h1>

              <img className="me-2" src={img} />

              <StarRating />

            </div>
            <div className="modal-footer">
              <button type="button" tabindex="-1"className="btn btn-primary" onClick={SaveBook} data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Bottom popover">
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

