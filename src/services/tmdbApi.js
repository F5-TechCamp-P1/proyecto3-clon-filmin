import axios from 'axios';

//Configuracion base para no repetir la URL y el API_KEY
const API_KEY = '35412b192aeb6630f8dc3e53d088358a'; //Aqui va la API_KEY 35412b192aeb6630f8dc3e53d088358a
const BASE_URL = 'https://api.themoviedb.org/3'; // La URL base para todas las solicitudes API

// Crear una instancia de Axios con la configuración base
const tmdbApi = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: 'es-ES',//Permite recibir la información en español
  }
});

// La función getPopularMovies() devuelve las peliculas más populares de la semana lista: Carrousel
export const getPopularMovies = async () => {
  const response = await tmdbApi.get('/movie/popular');
  return response.data.results;
};

// La funcion getOscarNominatedMovies() devuelve las peliculas que ganaron el Oscar en 2023 lista: "Candidatas al Óscar internacional"
export const getOscarNominatedMovies = async () => { 
  const response = await tmdbApi.get('/movie/top_rated'); 
  return response.data.results;
};

// La función getPopularSeries() devuelve las series más populares lista: "Series imprescindibles para todos los gustos"
export const getPopularTVShows = async () => {
  const response = await tmdbApi.get('/tv/popular');
  return response.data.results;
};

// La función getRecentBestMovies() devuelve las películas lista: "El mejor cine reciente en exclusiva"
export const getRecentExclusiveMovies = async () => { 
  const response = await tmdbApi.get('/movie/now_playing'); 
  return response.data.results; 
};
// Exportar la instancia de Axios para posibles usos adicionales
export default tmdbApi;



