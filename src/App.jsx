import React, { createContext } from 'react';
import NavBar from './components/NavBar';
import '../src/index.css'
import Footer from "./components/Footer";
import List from './components/List.jsx';
import MoviesCarousel from './components/MoviesCarousel.jsx';
import {
  getTrendingMovies,
  getPopularTVShows,
  getTopRatedMovies
} from './services/tmdbApi';
import './App.css';

export const ListTypeContext = createContext();

function App() {
  return (
    <div className="App">
<<<<<<< HEAD

      <NavBar />
      <div>
        <MoviesCarousel />
      </div>
      <ListTypeContext.Provider value="trendingMoviesList">
        <List listTitle="Películas en Tendencia" fetchList={getTrendingMovies} />
      </ListTypeContext.Provider>

      <ListTypeContext.Provider value="seriesList">
        <List listTitle="Series imprescindibles para todos los gustos" fetchList={getPopularTVShows} />
      </ListTypeContext.Provider>

      <ListTypeContext.Provider value="topRatedMoviesList">
        <List listTitle="Películas Mejor Valoradas" fetchList={getTopRatedMovies} />
      </ListTypeContext.Provider>
      <div>
        <Footer/>
      </div>
=======
      <NavBar />
      <div>    
        <MoviesCarousel />
      </div>

           
      <ListTypeContext.Provider value="trendingMoviesList">
        <List listTitle="Películas en Tendencia" fetchList={getTrendingMovies} />
      </ListTypeContext.Provider>
      
      <ListTypeContext.Provider value="seriesList">
        <List listTitle="Series imprescindibles para todos los gustos" fetchList={getPopularTVShows} />
      </ListTypeContext.Provider>
      
      <ListTypeContext.Provider value="topRatedMoviesList">
        <List listTitle="Películas Mejor Valoradas" fetchList={getTopRatedMovies} />
      </ListTypeContext.Provider>

      <Footer/>
>>>>>>> 9a197fd (Add connection Corousel and Api)
    </div>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 9a197fd (Add connection Corousel and Api)
