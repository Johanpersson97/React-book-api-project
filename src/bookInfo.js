import React, { useState } from 'react';
import StarRating from './rating';

export default function BookInfo(props) {
  const img = props.item.smallImg !== undefined ? props.item.smallImg : require("./undefined.png");
  const authors = props.item.authors;
  const [grade, setGrade] = useState(0); // Add state for grade

  const SaveBook = () => {
    const storedBooks = localStorage.getItem('books');
    const books = storedBooks ? JSON.parse(storedBooks) : [];

    const bookExists = books.some((book) => book.title === props.item.title && book.publishedDate === props.item.publishedDate);
    if (!bookExists) {
      const newBook = { ...props.item, grade }; // Add grade to the book object
      books.push(newBook);
      localStorage.setItem('books', JSON.stringify(books));
      alert('Saved');
    } else {
      alert('Already in your bookshelf!');
    }
  };

  return (
    <div>
      <div className="modal" id="bookModal" role="dialog" tabIndex="-1" style={{ display: "block" }}>
        <div className="modal-dialog modal-lg">
          <div className="modal-content bg-dark">
            <div className="modal-body">
              <h1 className="modal-title" id="exampleModalLabel">{authors}</h1>
              <img className="me-2" src={img} />
              <StarRating grade={grade} setGrade={setGrade} />
            </div>
            <div className="modal-footer">
              <button type="button" tabIndex="-1" className="btn btn-primary" onClick={SaveBook} data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Bottom popover">
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