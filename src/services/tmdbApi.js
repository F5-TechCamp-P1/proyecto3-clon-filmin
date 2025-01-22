import axios from 'axios';



const API_KEY = ''; //Aqui va la API_KEY 35412b192aeb6630f8dc3e53d088358a
const BASE_URL = 'https://api.themoviedb.org/3'; 


const tmdbApi = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: 'es-ES', 
  }
});


export const getPopularMovies = async () => {
  const response = await tmdbApi.get('/movie/popular');
  return response.data.results.slice(0, 10); 
};


export const getTrendingMovies = async (timeWindow = 'week') => {
  const response = await tmdbApi.get(`/trending/movie/${timeWindow}`);
  return response.data.results.slice(0, 10); 
};


export const getTopRatedMovies = async () => {
  const response = await tmdbApi.get('/movie/top_rated');
  return response.data.results.slice(0, 10); 
};


export const getPopularTVShows = async () => {
  const response = await tmdbApi.get('/tv/popular');
  return response.data.results.slice(0, 10); 
};


export default tmdbApi;
