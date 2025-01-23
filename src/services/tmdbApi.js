import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;
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
  return response.data.results.slice(0, 15);
};
export const getTrendingMovies = async (timeWindow = 'week') => {
  const response = await tmdbApi.get(`/trending/movie/${timeWindow}`);
  return response.data.results.slice(0, 15);
};
export const getTopRatedMovies = async () => {
  const response = await tmdbApi.get('/movie/top_rated');
  return response.data.results.slice(0, 15);
};
export const getPopularTVShows = async () => {
  const response = await tmdbApi.get('/tv/popular');
  return response.data.results.slice(0, 15);
};

export default tmdbApi;
