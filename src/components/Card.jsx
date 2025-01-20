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
    <div onMouseEnter={handleHover} onMouseLeave={handleHoverOut}>
      <img src={imgUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      {hover && <CardWithDetails title={title} description={description} genres={genres} rating={rating} />}
    </div>
  );
}

export default Card;
