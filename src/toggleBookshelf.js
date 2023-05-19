import React from "react";
import Bookshelf from "./bookshelf"

const ToggleBookshelf = () => {
  return (
    <div>
      <button class="btn btn-secondary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Bookshelf</button>
      <div class="offcanvas offcanvas-end text-bg-dark" data-bs-backdrop="false" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasRightLabel">My bookshelf</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <Bookshelf />
        </div>
      </div>
    </div>
  );
};

export default ToggleBookshelf;
