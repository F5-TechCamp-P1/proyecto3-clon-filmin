import React, { useState, useContext } from 'react';
import CardWithDetails from '../components/CardWithDetails';
import { ListTypeContext } from '../App';

function Card ({ imgUrl, title, description, genres, rating }) {
  const listType = useContext(ListTypeContext);
  const [hover, setHover] = useState(false);

  function handleHover() {
    setHover(true);
  }

  function handleHoverOut() {
    setHover(false);
  }

  return (

    <div className="m-2 relative"

      onMouseEnter={handleHover} 
      onMouseLeave={handleHoverOut}
    >
      <img 
        src={imgUrl} 
        alt={title} 
        className="rounded hover:border hover:border-gray-500"
      />
      {hover && listType === "seriesList" && (
        <div 
          className={`z-10 absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${hover ? 'opacity-100' : 'opacity-0'}`}
        > 
          <CardWithDetails title={title} description={description} genres={genres} rating={rating} /> 
        </div>
      )}
    </div>
  );
}

export default Card;
