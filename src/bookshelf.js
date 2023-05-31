import React, { useState } from 'react';
import StarRating from './rating';

const Bookshelf = () => {
  // Retrieve books from local storage
  const storedBooks = localStorage.getItem('books');
  const books = JSON.parse(storedBooks) || [];

  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const [newGrade, setNewGrade] = useState(0); // till updategrade

  const [sortOrder, setSortOrder] = useState('ascending'); // Sorting order state
  const [showUnread, setShowUnread] = useState(false); // Checkbox state for unread books
  const [showRead, setShowRead] = useState(false); // Checkbox state for read books

  const handleOpenModal = (book) => {
    setSelectedBook(book);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleUpdateGrade = () => {
    const updatedBooks = books.map((book) => {
      if (book.title === selectedBook.title) {
        return { ...book, grade: newGrade };
      }
      return book;
    });

    localStorage.setItem('books', JSON.stringify(updatedBooks));
    setSelectedBook((prevSelectedBook) => {
      if (prevSelectedBook && prevSelectedBook.id === selectedBook.id) {
        return { ...prevSelectedBook, grade: newGrade };
      }
      return prevSelectedBook;
    });
    setShowModal(false); // Stäng modalen efter att betyget har uppdaterats
  };

  const handleRemoveBook = (book) => {
    const updatedBooks = books.filter((b) => b.title !== book.title);
    localStorage.setItem('books', JSON.stringify(updatedBooks));
    setSelectedBook(null);
  };

  const handleSortByGrade = () => {
    const sortedBooks = [...books].sort((a, b) => {
      if (sortOrder === 'ascending') {
        return a.grade - b.grade;
      } else {
        return b.grade - a.grade;
      }
    });
    setSortOrder(sortOrder === 'ascending' ? 'descending' : 'ascending');
    localStorage.setItem('books', JSON.stringify(sortedBooks));
  };

  const handleToggleUnread = () => {
    setShowUnread(true);
    setShowRead(false);
  };

  const handleToggleRead = () => {
    setShowRead(true);
    setShowUnread(false);
  };

  const handleShowAllBooks = () => {
    setShowRead(false);
    setShowUnread(false);
  };

  //Filter books based on grade
  let filteredBooks = books;
  if (showUnread) {
    filteredBooks = filteredBooks.filter((book) => book.grade === 0);
  } else if (showRead) {
    filteredBooks = filteredBooks.filter((book) => book.grade !== 0);
  }

  return (
    <div>
      <div className="d-flex justify-content-between _book _ls-1">
        <div>
          <button className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Sort your books
          </button>
          <ul class="dropdown-menu dropdown-menu-dark">
            <li><button className="dropdown-item" onClick={handleShowAllBooks} type="button">Show all books</button></li>
            <li><button className="dropdown-item" onClick={handleSortByGrade} type="button">Sort by grade: {sortOrder === 'ascending' ? 'Ascending' : 'Descending'} </button></li>
            <li><button className="dropdown-item" onClick={handleToggleUnread} type="button">Show unread books</button></li>
            <li><button className="dropdown-item" onClick={handleToggleRead} type="button">Show read books</button></li>
          </ul>
        </div>
      </div>

      {filteredBooks.length > 0 ? (
        <ul className="p-0 mt-3 list-group">
          {filteredBooks.map((book) => (
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
                <h2 className="modal-title h1" id="exampleModalLabel">{selectedBook.title}</h2>
                <div className="hstack mt-2">
                  <div className="vstack d-flex mt-1">
                    <img className="large-image me-2 align-self-start" src={selectedBook.smallImg !== undefined ? selectedBook.smallImg : require("./undefined.png")} alt="Book cover" />
                    <h3 className="fs-4 mt-2">{selectedBook.authors}</h3>
                    <p className="_book">{selectedBook.publishedDate.slice(0, 4)}</p>

                  </div>
                  <div className="align-self-stretch d-flex flex-column justify-content-between">
                    {selectedBook.bookInfo ? (
                      <p className="_book _justify fs-6 mx-2">{selectedBook.bookInfo}</p>
                    ) : (
                      <p className="_book _justify fs-6 mx-2"> Book info not found. </p>
                    )}
                    <div className="mx-2 mt-5 _book">
                      {selectedBook.grade !== 0 && (
                        <p className="fs-5 p-0 m-0">Grade: {selectedBook.grade}</p>
                      )}
                      <StarRating grade={newGrade} setGrade={setNewGrade} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={handleUpdateGrade}>
                  Update Grade
                </button>
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
