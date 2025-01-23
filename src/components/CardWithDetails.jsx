import React from 'react';

function CardWithDetails({ title, description, genres, rating }) {
  return (
    <div className="text-white rounded bg-black p-3">
      <div className="flex justify-center align-center h-[35px] w-[35px] border-2 border-slate-50 p-1">{rating.toFixed(1)}</div>
      <h4 className="text-lg">{title}</h4>
      <p className="text-sm">{description}</p>
    </div>
  );
}

export default CardWithDetails;
