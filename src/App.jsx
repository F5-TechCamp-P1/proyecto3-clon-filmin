import React, { createContext } from 'react';
import CarruselReactResponsive from "./components/Carousel/carousel";
import NavBar from './components/NavBar';
import '../src/index.css'
import Footer from "./components/Footer";
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
         <NavBar />
         <div>    
          <CarruselReactResponsive />
          </div>
      <div>
      <ListTypeContext.Provider value="popularMoviesList">
        <List listTitle="Películas Populares" fetchList={getPopularMovies} />
      </ListTypeContext.Provider>
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
          <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;

