import React from 'react';

function CardWithDetails({ title, description, genres, rating }) {
  return (
    <div>
      <p>Calificación: {rating}</p>
      <h4>{title}</h4>
      <span>Géneros: {genres.join(', ')}</span>
      <p>Resumen: {description}</p>
    </div>
  );
}

export default CardWithDetails;
