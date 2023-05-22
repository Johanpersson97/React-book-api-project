import React from 'react';



export default function Book(props) { 

    return (
        <div>
            <li class="list-group-item list-group-item-action list-group-item-dark d-flex p-0 align-items-center">{props.item.title}</li>
            <img class="me-2" src="" />
            <span class="ms-auto me-2">{props.item.publishedDate}</span>
        </div>
    )
}
