import React, { useState } from 'react';
import StarRating from './rating';

const Bookshelf = () => {
  // Retrieve books from local storage
  const storedBooks = localStorage.getItem('books');
  const books = JSON.parse(storedBooks) || [];

  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const [grade, setGrade] = useState(0); // till grade 

  const handleOpenModal = (book) => {
    setSelectedBook(book);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };



  const handleRemoveBook = (book) => {
    const updatedBooks = books.filter((b) => b.title !== book.title);
    localStorage.setItem('books', JSON.stringify(updatedBooks));
    setSelectedBook(null);
  };


  return (
    <div>
      {books.length > 0 ? (
        <ul>
          {books.map((book) => (
            <li
              key={book.id}
              className="list-group-item list-group-item-action list-group-item-dark d-flex p-0 align-items-center"
              onClick={() => handleOpenModal(book)}
            >
              <img
                className="me-2 small-image"
                src={book.smallImg !== undefined ? book.smallImg : require("./undefined.png")}
                alt="Book cover"
              />
              <div className="d-flex flex-column">
                <p className="m-0">{book.title}</p>
                <p className="m-0">{book.authors}</p>
                {book.grade !== 0 && <p className="m-0">Grade: {book.grade}</p>}
              </div>
              <span className="ms-auto me-2">{book.publishedDate}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p>No books found in the bookshelf.</p>
      )}

      {showModal && selectedBook && (
        <div className="modal" id="bookModal" role="dialog" tabIndex="-1" style={{ display: "block" }}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content bg-dark">
              <div className="modal-body">
                <h1 className="modal-title" id="exampleModalLabel">{selectedBook.title}</h1>
                <img className="me-2" src={selectedBook.smallImg} alt="Book cover" />
                <p>{selectedBook.bookInfo}</p>
                <p>Author: {selectedBook.authors}</p>
                <p>Published: {selectedBook.publishedDate}</p>

                {selectedBook.grade !== 0 ? (
                <p>Grade: {selectedBook.grade}</p>
                ) : (
                <StarRating grade={grade} setGrade={setGrade} />
               
                )}

 

              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-danger" onClick={() => handleRemoveBook(selectedBook)}>
                  Remove from Bookshelf
                </button>
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleCloseModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bookshelf;