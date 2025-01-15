// services/api.js
const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '35412b192aeb6630f8dc3e53d088358a';

// La función getHighlightedMovies() devuelve las peliculas más populares de la semana lista: Carrousel
export const getHighlightedMovies = () => 
  fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}&language=es-ES`);

// La función getRecentBestMovies() devuelve las películas lista: "El mejor cine reciente en exclusiva"
export const getRecentBestMovies = () => 
  fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=es-ES&sort_by=release_date.desc&vote_average.gte=7.5&primary_release_date.gte=${dateStr}`
  );

// La función getPopularSeries() devuelve las series más populares lista: "Series imprescindibles para todos los gustos"
export const getPopularSeries = () => 
    fetch(`${BASE_URL}/tv/popular?api_key=${API_KEY}&language=es-ES`);  

// La funcion getInternationalOscarContenders() devuelve las peliculas que ganaron el Oscar en 2023 lista: "Candidatas al Óscar internacional"
export const getInternationalOscarContenders = () => 
  fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=es-ES&primary_release_year=2023&with_original_language=!en&vote_average.gte=7.0&sort_by=vote_average.desc`
  );

// La función getMovieById() devuelve la información de una película
export const getMovieById = (movieId) => 
    fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=es-ES`);  





a


