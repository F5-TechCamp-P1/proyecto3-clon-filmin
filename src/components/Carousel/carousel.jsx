import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";



const CarouselReactResponsive = () => {
  return (
    <Carousel showArrows={true} showThumbs={true} autoPlay={true}>
      <div>
        <img src="https://i.blogs.es/6e752e/madmax-furyroad-movie-screencaps.com-4/1366_2000.webp" alt="placeholder"/>
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="https://i.blogs.es/6a1ffe/womderwoman-movie-screencaps.com-15545/1366_2000.webp" alt="placeholder"/>
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="https://i.blogs.es/8e317c/guardians2-movie-screencaps.com-434/1366_2000.webp" alt="placeholder"/>
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
}
export default CarouselReactResponsive;
