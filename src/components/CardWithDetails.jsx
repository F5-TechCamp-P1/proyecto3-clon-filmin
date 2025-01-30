function CardWithDetails({ title, description, genres, rating }) {
  return (
    <div className="text-white rounded bg-black p-3">
      <div className="flex justify-center items-center h-10 w-10 rounded-full bg-filmin-green text-black font-bold text-md border-2 border-white">
        {rating.toFixed(1)}
      </div>
      <h4 className="text-lg mt-2">{title}</h4>
      <p className="text-sm mt-1">{description}</p>
    </div>
  );
}

export default CardWithDetails;
