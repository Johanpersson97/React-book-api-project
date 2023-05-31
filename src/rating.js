import React, { useState, useEffect } from 'react';

const StarRating = ({ grade, setGrade }) => {
  const [rating, setRating] = useState(0);
  const [bookRating, setBookRating] = useState(0);
  const [showStars, setShowStars] = useState(false);
  
  // Sätter det ursprungliga värdet på betyg
  useEffect(() => {
    setRating(grade); 
    setBookRating(grade);
  }, [grade]);

  // Ändrar färg på stjärnorna när muspekaren hålls över dem
  const handleStarHover = (starIndex) => {
    setRating(starIndex);
  };

  // Ändrar färg på stjärnorna så de visar det valda betyget när man inte längre har muspekaren över dem
  const handleStarLeave = () => {
    setRating(bookRating);
  };
  
  // Uppdatera betyget i förälder-komponenten
  const handleStarClick = () => {
    setBookRating(rating);
    setGrade(rating);
  };



  return (

        <div>
          {[1, 2, 3, 4, 5].map((starIndex) => (
            <span
              key={starIndex}
              className={`h1 star ${starIndex <= (rating || bookRating) ? 'active' : ''}`}
              onMouseEnter={() => handleStarHover(starIndex)}
              onMouseLeave={handleStarLeave}
              onClick={handleStarClick}
            >
              ★
            </span>
          ))}
        </div>
)};

export default StarRating;
