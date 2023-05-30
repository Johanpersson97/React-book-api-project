import React, { useState } from 'react';
import BookInfo from './bookInfo';


export default function Book(props) {

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const img = props.item.smallImg !== undefined ? props.item.smallImg : require("./undefined.png")

  return (
    <div className="list-group-item list-group-item-action list-group-item-dark p-0">
      <li className="d-flex p-0 align-items-center" onClick={handleOpenModal}>
        <img className="me-2 small-image"
          src={img}
          alt="Book cover" />
        <div className="d-flex flex-column">
          <p className="m-0">
            {props.item.title}
          </p>
          <p className="m-0">
            {props.item.authors}
          </p>
        </div>
        <span className="ms-auto me-2">
          {props.item.publishedDate}
        </span>
      </li>
      {showModal && <BookInfo key={props.item.id} item={props.item} closeModal={handleCloseModal} />}
    </div>
  );

}
