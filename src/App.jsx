import React, { createContext } from 'react';
import List from './components/List.jsx';
import {
  getPopularMovies,
  getTrendingMovies,
  getPopularTVShows,
  getTopRatedMovies
} from './services/tmdbApi';
import './App.css';

export const ListTypeContext = createContext();

function App() {
  return (
    <div className="App">
      {/* Carrusel al inicio de la página */}
      <ListTypeContext.Provider value="popularMoviesList">
        <List listTitle="Películas Populares" fetchList={getPopularMovies} />
      </ListTypeContext.Provider>
      
      {/* Cuerpo de la página */}
      <ListTypeContext.Provider value="trendingMoviesList">
        <List listTitle="Películas en Tendencia" fetchList={getTrendingMovies} />
      </ListTypeContext.Provider>
      <ListTypeContext.Provider value="seriesList">
        <List listTitle="Series imprescindibles para todos los gustos" fetchList={getPopularTVShows} />
      </ListTypeContext.Provider>
      <ListTypeContext.Provider value="topRatedMoviesList">
        <List listTitle="Películas Mejor Valoradas" fetchList={getTopRatedMovies} />
      </ListTypeContext.Provider>
    </div>
  );
}

export default App;
