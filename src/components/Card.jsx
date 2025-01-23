import React, { useState, useContext } from 'react';
import CardWithDetails from '../components/CardWithDetails';
import { ListTypeContext } from '../App';

function Card ({ imgUrl, title, description, genres, rating }) {
    let listType = useContext(ListTypeContext);
    
    const [hover, setHover] = useState(false);
    
    function handleHover() {
        setHover(true);
    }

    function handleHoverOut() {
        setHover(false);
    }

    return (
        <>
            <div className="m-1"> 
                <img src={imgUrl} onMouseEnter={handleHover} onMouseLeave={handleHoverOut} alt={title} className="rounded transition-transform transform hover:scale-105 duration-300"/>
            </div>
            {hover && listType === "seriesList" && ( 
                <div> 
                    <CardWithDetails title={title} description={description} genres={genres} rating={rating} /> 
                </div> 
            )}
        </>
    );
}

export default Card;


