// services/api.js
const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '35412b192aeb6630f8dc3e53d088358a';

// La función getHighlightedMovies() devuelve las peliculas más populares de la semana
export const getHighlightedMovies = () => 
  fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}&language=es-ES`);



// La función getPopularSeries() devuelve las series más populares
export const getPopularSeries = () => 
    fetch(`${BASE_URL}/tv/popular?api_key=${API_KEY}&language=es-ES`);

