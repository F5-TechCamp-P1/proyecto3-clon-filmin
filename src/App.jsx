import React from "react";
import CarruselReactResponsive from "./components/Carousel/carousel";
import MovieList from './components/MovieList';
import NavBar from './components/NavBar';
import '../src/index.css'
import Footer from "./components/Footer";

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
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default App;