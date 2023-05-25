import React, { useState, useEffect } from 'react';

const StarRating = ({ grade, setGrade }) => {
  const [rating, setRating] = useState(0);
  const [bookRating, setBookRating] = useState(0);
  const [showStars, setShowStars] = useState(false);

  useEffect(() => {
    setRating(grade); // Set initial rating to the grade from props
    setBookRating(grade);
  }, [grade]);

  const handleStarHover = (starIndex) => {
    setRating(starIndex);
  };

  const handleStarLeave = () => {
    setRating(bookRating);
  };

  const handleStarClick = () => {
    setBookRating(rating);
    setGrade(rating); // Update the grade in the parent component
  };

  const handleCheckboxChange = () => {
    setShowStars(!showStars);
  };

  return (
    <div>
      <label>
        <input type="checkbox" checked={showStars} onChange={handleCheckboxChange} />
        Har läst
      </label>
      {showStars && (
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