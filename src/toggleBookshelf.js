import React, { useState } from "react";
import Bookshelf from "./bookshelf"

const ToggleBookshelf = () => {

  const [books, setBooks] = useState([]);

  const handleRetrieveBooks = () => {
    const storedBooks = localStorage.getItem('books');
    const parsedBooks = JSON.parse(storedBooks) || [];
    setBooks(parsedBooks);
  };


  return (
    <div>
      <button className="btn btn-secondary mt-2 p-2 d-flex align-items-center" aria-hidden="true" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" onClick={handleRetrieveBooks}>
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <h5 className="d-inline my-0 mx-3">Bookshelf</h5>
      </button>
      <div className="offcanvas offcanvas-end text-bg-dark" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header">
          <button className="btn btn-secondary px-2 mt-2 d-flex align-items-center" type="button" data-bs-dismiss="offcanvas" aria-label="Close">
            <span className="carousel-control-next-icon ms-1" aria-hidden="true"></span>
          </button>
        </div>
        <div className="offcanvas-body">
          <Bookshelf />
        </div>
      </div>
    </div>
  );
};

export default ToggleBookshelf;
