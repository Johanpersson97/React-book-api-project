import React from 'react';
import StarRating from './rating';


export default function BookInfo(props) {
  
    const img= props.item.img;
    const authors = props.item.authors;
    console.log(authors)
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
              <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={props.closeModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

