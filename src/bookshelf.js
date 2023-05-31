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
          <button class="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          Sort your books
          </button>
          <ul class="dropdown-menu dropdown-menu-dark">
            <li><a class="dropdown-item" onClick={handleShowAllBooks} href="#">Show all books</a></li>
            <li><a class="dropdown-item" onClick={handleSortByGrade} href="#">Sort by grade: {sortOrder === 'ascending' ? 'Ascending' : 'Descending'} </a></li>
            <li><a class="dropdown-item" onClick={handleToggleUnread} href="#">Show unread books</a></li>
            <li><a class="dropdown-item" onClick={handleToggleRead} href="#">Show read books</a></li>
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
                <h1 className="modal-title" id="exampleModalLabel">{selectedBook.title}</h1>
                <img className="me-2" src={selectedBook.smallImg !== undefined ? selectedBook.smallImg : require("./undefined.png")} alt="Book cover" />

                {selectedBook.bookInfo ? ( 
                <p>{selectedBook.bookInfo}</p>
                ) : (
                <p> Book info not found. </p>
                )}

                <p>Author: {selectedBook.authors}</p>
                <p>Published: {selectedBook.publishedDate}</p>

                {selectedBook.grade !== 0 && (
                <p>Grade: {selectedBook.grade}</p>
                ) }   
                <StarRating grade={newGrade} setGrade={setNewGrade} />
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
