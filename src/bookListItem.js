import React from 'react';



export default function Book(props) { 

    return (
        <li className="m-5">title: {props.item.title} year: {props.item.publishedDate} id: {props.item.id} authors: {props.item.authors} <img src= {props.item.img} alt="omslagsbild"/></li>

    )
}
