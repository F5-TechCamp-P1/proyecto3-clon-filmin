import React from 'react';
import Slider from "react-slick";
import Card from '../components/Card';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CardsSection({ items }){
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
  };

  if (!items || items.length === 0) {
    return null;
  }

  return (
      <Slider {...settings}>
        {items.map(item => (
          <div key={item.id}>
            <Card
              imgUrl={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
              title={item.title || item.name}
              description={item.overview}
              genres={item.genre_ids}
              rating={item.vote_average}
            />
          </div>
        ))}
      </Slider>
    );
}

export default CardsSection
