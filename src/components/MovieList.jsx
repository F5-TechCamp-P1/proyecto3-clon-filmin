import React, { useEffect, useState } from 'react';
import { getPopularMovies } from '../services/tmdbApi';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const movies = await getPopularMovies();
      setMovies(movies.slice(0, 5));
    };
    fetchMovies();
    
  }, []);

  return (
    <div>
      <h2>Películas Populares</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
            <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} /> 
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;


