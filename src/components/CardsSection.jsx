import React from 'react';
import Card from '../components/Card';
import MoreArrowButton from '../components/MoreArrowButton';

function CardsSection({ items }) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <Card
              imgUrl={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
              title={item.title || item.name}  
              description={item.overview}
              genres={item.genre_ids}  
              rating={item.vote_average}
            />
          </li>
        ))}
      </ul>
      <MoreArrowButton direction="Previous" />
      <MoreArrowButton direction="Next" />
    </div>
  );
}

export default CardsSection;
