import React from 'react';
import StarRating from './rating';

export default function BookInfo(props) {
   
    
    const img= props.item.img;
    const authors = props.item.authors;
    console.log(authors)

    const SaveBook = () => {
        const storedBooks = localStorage.getItem('books');
        const books = storedBooks ? JSON.parse(storedBooks) : [];

        // Lägg till den aktuella boken i listan
        books.push(props.item);

        // Spara den uppdaterade listan med böcker i localStorage
        localStorage.setItem('books', JSON.stringify(books));

        alert('The book is saved to your bookshelf!');
      };

    return (
      <div className="modal text-dark" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title"> </h5>  
            </div>
            <div className="modal-body"> 
              <p>{authors}</p>
              <img className="me-2" src={img} />
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={SaveBook}>
                Save to bookshelf
                </button>
        
                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={props.closeModal}>
                 Close
                </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

