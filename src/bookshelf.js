import React, { useState } from 'react';

const Bookshelf = () => {
  // Retrieve books from local storage
  const storedBooks = localStorage.getItem('books');
  const books = JSON.parse(storedBooks) || [];

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const img = books.smallImg !== undefined ? books.smallImg : require("./undefined.png")

  return (
    <div>
      {books.length > 0 ? (
        <ul>
          {books.map(books => (
            <li key={books.id} className="list-group-item list-group-item-action list-group-item-dark d-flex p-0 align-items-center" onClick={handleOpenModal}>
              <img className="me-2 small-image"
                src={books.smallImg !== undefined ? books.smallImg : require("./undefined.png")}
                alt="Book cover" />
              <div className="d-flex flex-column">
                <p className="m-0">
                  {books.title}
                </p>
                <p className="m-0">
                  {books.authors}
                </p>
              </div>
              <span className="ms-auto me-2">
                {books.publishedDate}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p>No books found in the bookshelf.</p>
      )}
    </div>
  );
};

export default Bookshelf;