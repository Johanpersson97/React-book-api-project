import React, { useState } from 'react';
import StarRating from './rating';

export default function BookInfo(props) {
  const img = props.item.img !== undefined ? props.item.img : require("./undefined.png");

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
      props.closeModal(); // stäng modal efter alert

    } else {
      alert('Already in your bookshelf!');
      props.closeModal(); // stäng modal efter alert
    }
  };

  return (
    <div>
      <div className="modal text-white" id="bookModal" role="dialog" tabIndex="-1" style={{ display: "block" }}>
        <div className="modal-dialog modal-lg">
          <div className="modal-content bg-dark">
            <div className="modal-body">
              <h2 className="modal-title h1" id="exampleModalLabel">{props.item.title}</h2>
              <h3 className="h4">{props.item.authors}</h3>
              <div className="hstack">
                <div className="vstack d-flex">

                  <img className="large-image me-2 align-self-start" src={img} alt="book cover" />
                  <p className="mt-1">Published: {props.item.publishedDate}</p>
                </div>
                <div className="d-flex flex-column justify-content-between">
                  {props.item.bookInfo ? (
                    <p className="_book _justify mx-2">{props.item.bookInfo}</p>
                  ) : (
                    <p> Book info not found. </p>
                  )}
                  <div className="mx-2 mt-5">
                    <p>Already read the book? Rate it before saving: </p>
                    <StarRating grade={grade} setGrade={setGrade} />
                  </div>
                </div>
              </div>

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
