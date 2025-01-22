import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselReactResponsive = ({ items }) => {
  if (!items || items.length === 0) {
       return null; 
  }

  return (
    <div className="bg-black">
      <Carousel showArrows={true} showThumbs={false} infiniteLoop={true} autoPlay={true} dynamicHeight={false}>
        {items.map(item => (
          <div key={item.id} className="flex justify-center items-center max-h-min w-full">
            <img src={`https://image.tmdb.org/t/p/w1280${item.backdrop_path}`} alt={item.title || item.name} className=" shadow-lg" style={{ clipPath: 'inset(5px)' }} />
            <p className="legend">{item.title || item.name}</p>
          </div>        ))}
      </Carousel>
    </div>
  );
}

export default CarouselReactResponsive;
