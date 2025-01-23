import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import useFetchMovies from './ListMoviesCarousel';

const CarouselReactResponsive = () => {
  const movies = useFetchMovies();

  return (
    <div style={{ backgroundColor: 'black', padding: '16px' }}>
      <Carousel
        showArrows={true}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        dynamicHeight={false}
        className="text-white"
      >
        {movies.map(movie => (
          <div key={movie.id} style={{ position: 'relative', height: '500px' }}>
            <img
              src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
              alt={movie.title || movie.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
            />
            <div style={{ position: 'absolute', bottom: '16px', left: '16px', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '16px', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{movie.title || movie.name}</h3>
              <p style={{ fontSize: '1rem' }}>{movie.overview}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselReactResponsive;