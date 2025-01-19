import React, { useState } from 'react';
import CardWithDetails from '../components/CardWithDetails';

function Card({ imgUrl, title, description, genres, rating }) {
  const [hover, setHover] = useState(false);

  function handleHover() {
    setHover(true);
  }

  function handleHoverOut() {
    setHover(false);
  }

  return (
    <>
      <div>
        <img src={imgUrl} alt={title} onMouseEnter={handleHover} onMouseLeave={handleHoverOut} />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      {hover && <CardWithDetails title={title} description={description} genres={genres} rating={rating} />}
    </>
  );
}

export default Card;
