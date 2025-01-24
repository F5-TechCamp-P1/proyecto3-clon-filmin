import { getTrendingMovies, getPopularTVShows, getTopRatedMovies } from '../../services/tmdbApi';

const lists = [
    { id: "trendingMoviesList", title: "Películas en Tendencia", fetchFunction: getTrendingMovies },
    { id: "seriesList", title: "Series imprescindibles para todos los gustos", fetchFunction: getPopularTVShows },
    { id: "topRatedMoviesList", title: "Películas mejor valoradas", fetchFunction: getTopRatedMovies }
  ];
  
  export default lists;