import React, { useEffect, useState } from 'react';
import { getPopularMovies } from '../services/tmdbApi';
import CardsSection from './CardsSection'; 

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const movies = await getPopularMovies();
      setMovies(movies);
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <CardsSection movies={movies} />
    </div>
  );
};

export default MovieList;
