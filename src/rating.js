import React, { useState } from 'react';

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [bookRating, setBookRating] = useState(0);

  const handleStarHover = (starIndex) => {
    setRating(starIndex);
  };

  const handleStarLeave = () => {
    setRating(bookRating);
  };

  const handleStarClick = () => {
    setBookRating(rating);
    console.log(rating)
  };

  return (
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
  );
};

export default StarRating;
