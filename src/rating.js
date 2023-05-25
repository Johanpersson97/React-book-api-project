import React, { useState } from 'react';

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [bookRating, setBookRating] = useState(0);
  const [showStars, setShowStars] = useState(false); // New state for checkbox

  const handleStarHover = (starIndex) => {
    setRating(starIndex);
  };

  const handleStarLeave = () => {
    setRating(bookRating);
  };

  const handleStarClick = () => {
    setBookRating(rating);
    console.log(rating);
  };

  const handleCheckboxChange = () => {
    setShowStars(!showStars); // Toggle the checkbox state
  };

  return (
    <div>
      <label>
        <input type="checkbox" checked={showStars} onChange={handleCheckboxChange} />
        Show Stars
      </label>
      {showStars && ( // Render stars only if showStars is true
        <div>
          {[1, 2, 3, 4, 5].map((starIndex) => (
            <span
              key={starIndex}
              className={`h3 star ${starIndex <= (rating || bookRating) ? 'active' : ''}`}
              onMouseEnter={() => handleStarHover(starIndex)}
              onMouseLeave={handleStarLeave}
              onClick={handleStarClick}
            >
              ★
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default StarRating;