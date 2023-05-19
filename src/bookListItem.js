import React from 'react';



export default function Book(props) { 

    return (
        <li>title: {props.item.title} year: {props.item.publishedDate}</li>

    )
}
