import axios from 'axios';

//Configuracion base para no repetir la URL y el API_KEY
const API_KEY = '35412b192aeb6630f8dc3e53d088358a'; // Aquí va tu API_KEY 35412b192aeb6630f8dc3e53d088358a
const BASE_URL = 'https://api.themoviedb.org/3'; // La URL base para todas las solicitudes API

// Crear una instancia de Axios con la configuración base
const tmdbApi = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: 'es-ES', // Permite recibir la información en español
  }
});

// La función getPopularMovies() devuelve las películas más populares para mostrar en el carrusel
export const getPopularMovies = async () => {
  const response = await tmdbApi.get('/movie/popular');
  return response.data.results.slice(0, 10); 
};

// La función getTrendingMovies() devuelve las películas en tendencia
export const getTrendingMovies = async (timeWindow = 'week') => {
  const response = await tmdbApi.get(`/trending/movie/${timeWindow}`);
  return response.data.results.slice(0, 10); 
};

// La función getTopRatedMovies() devuelve las películas mejor valoradas
export const getTopRatedMovies = async () => {
  const response = await tmdbApi.get('/movie/top_rated');
  return response.data.results.slice(0, 10); 
};

// La función getPopularTVShows() devuelve las series más populares
export const getPopularTVShows = async () => {
  const response = await tmdbApi.get('/tv/popular');
  return response.data.results.slice(0, 10); 
};


export default tmdbApi;
