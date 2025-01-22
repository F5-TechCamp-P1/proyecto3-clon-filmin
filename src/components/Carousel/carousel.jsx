import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import useMoviesWithTrailers from './MoviesTrailersCarousel';

const CarouselReactResponsive = () => {
  const movies = useMoviesWithTrailers();

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
          <div key={movie.id} className="relative flex flex-col justify-center items-center w-full" style={{ height: '500px' }}>
            <img src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} alt={movie.title || movie.name} className="shadow-lg object-cover w-full h-full" style={{ objectFit: 'cover' }} />
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 p-4 rounded">
              <h3 className="text-xl font-bold">{movie.title || movie.name}</h3>
              <p className="text-sm">{movie.overview}</p>
            </div>
            {movie.trailer && (
              <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-75">
                <iframe
                  width="70%"
                  height="70%"
                  src={`https://www.youtube.com/embed/${movie.trailer}?autoplay=1`}
                  title={movie.title || movie.name}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselReactResponsive;