import React from "react";
import Bookshelf from "./bookshelf"

const ToggleBookshelf = () => {
  return (
    <div>
      <button id="toggleBookshelfButton" className="position-absolute top-0 end-0" tabIndex={1046} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">My Bookshelf</button>
      <div className="offcanvas offcanvas-end text-bg-dark" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasRightLabel">My bookshelf</h5>
          <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <Bookshelf />
        </div>
      </div>
    </div>
  );
};

export default ToggleBookshelf;
