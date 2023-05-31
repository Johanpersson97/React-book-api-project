import React, { useState } from 'react';
import BookInfo from './bookInfo';


export default function Book(props) {

  const [showModal, setShowModal] = useState(false);

  // Sätter modal som sann
  const handleOpenModal = () => {
    setShowModal(true);
  };

  // Sätter modal som falsk
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const img = props.item.smallImg !== undefined ? props.item.smallImg : require("./undefined.png") // om ingen bild finns, visa denna bilden istället

  // Returnerar information om boken i en modal
  return (
    <div className="list-group-item list-group-item-action list-group-item-dark p-0">
      <li className="d-flex p-0 align-items-center" onClick={handleOpenModal}>

          <img className="me-2 small-image"
            src={img}
            alt="Book cover" />
          <div className="d-flex flex-grow-1 justify-content-between _bold">
            <div className=''>
              <p className="m-0 fs-5">
                {props.item.title}
              </p>
              <p className="m-0 _medium">
                {props.item.authors}
              </p>
            </div>
          <span className="align-self-center me-2 _medium">
            {props.item.publishedDate}
          </span>
          </div>

      </li>
      {showModal && <BookInfo key={props.item.id} item={props.item} closeModal={handleCloseModal} />}
    </div>
  );

}
