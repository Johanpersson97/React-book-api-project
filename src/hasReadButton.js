import React from 'react';
// Knapp för att lägga till i bokhylla
const HasReadButton = () => {

  return (
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
      <label className="form-check-label" for="flexCheckDefault">
        Lägg till i bokhylla
      </label>
    </div>
  );
}

export default HasReadButton;
