import React from "react";
import CarruselReactResponsive from "./components/Carousel/carousel";
import MovieList from './components/MovieList';
import NavBar from './components/NavBar';
import '../src/index.css'


function App() {
  return (
    <div>
        <NavBar />
        {/* Contenido de la barra de navegación */}
      <div className="App">
        <MovieList/>
      </div>
      <div>    
        <CarruselReactResponsive />
      </div>
    </div>
  );
};

export default App;