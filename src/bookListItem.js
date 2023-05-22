import React from 'react';



export default function Book(props) {

  return (
    <div>
      <li className="list-group-item list-group-item-action list-group-item-dark d-flex p-0 align-items-center">
        <img className="me-2" src="" />
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
    </div>
  )
}
