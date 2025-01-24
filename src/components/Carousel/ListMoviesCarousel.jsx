import { useState, useEffect } from 'react';
import { getPopularMovies } from '../../services/tmdbApi';
const useFetchMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const moviesData = await getPopularMovies();
      setMovies(moviesData);
    };
    fetchMovies();
  }, []);

  return movies;
};

export default useFetchMovies;