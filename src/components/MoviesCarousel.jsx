import React, { useEffect, useState } from 'react';
import { getPopularMovies } from '../services/tmdbApi';
import CarouselReactResponsive from './Carousel/carousel';

const MoviesCarousel = () => {
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
      <CarouselReactResponsive items={movies} />
    </div>
  );
};

export default MoviesCarousel;

