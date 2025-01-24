import React from 'react'; 
import { Carousel } from "react-responsive-carousel"; 
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import useFetchMovies from './ListMoviesCarousel';

const CarouselReactResponsive = () => {
  const movies = useFetchMovies();

  return (
    <div className="bg-black p-4">
      <Carousel
        showArrows={true}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        dynamicHeight={false}
        className="text-white"
      >
        {movies.map(movie => (
          <div key={movie.id} className="relative h-[500px] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img 
              src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} 
              alt={movie.title || movie.name} 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute top-4 left-4 bg-black bg-opacity-50 p-2 rounded-md">
              <h3 className="text-2xl font-bold italic">{movie.title || movie.name}</h3>
            </div>
            <div className="absolute bottom-4 left-4 right-4 mx-auto w-[80%] bg-black bg-opacity-50 p-4 rounded-md shadow-md backdrop-filter backdrop-blur-sm transition-transform duration-300 transform hover:scale-105">
              <p className="text-sm">{movie.overview.substring(0, 100)}...</p>  {/* Descripción abreviada */}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselReactResponsive;
