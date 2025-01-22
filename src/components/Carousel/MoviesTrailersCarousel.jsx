import { useState, useEffect } from 'react';
import { getPopularMovies, getMovieTrailer } from '../../services/tmdbApi';

const fetchMoviesWithTrailers = async () => {
  const movies = await getPopularMovies();
  const moviesWithTrailers = await Promise.all(
    movies.map(async movie => {
      const trailer = await getMovieTrailer(movie.id);
      return { ...movie, trailer };
    })
  );
  return moviesWithTrailers;
};

const useMoviesWithTrailers = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const movies = await fetchMoviesWithTrailers();
      setMovies(movies);
    };
    fetchMovies();
  }, []);

  return movies;
};

export default useMoviesWithTrailers;