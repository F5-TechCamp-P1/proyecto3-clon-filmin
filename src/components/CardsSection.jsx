import {ListTypeContext} from '../App'
import Card from '../components/Card'
import MoreArrowButton from '../components/MoreArrowButton'
import React, { useEffect, useState, useContext} from 'react';
import { getRecentExclusiveMovies, getPopularTVShows, getOscarNominatedMovies} from '../services/tmdbApi';


function CardsSection(){
    let listType = useContext(ListTypeContext)
    const [movies, setMovies] = useState([]);
    useEffect(() => { 
        const fetchMovies = async () => { 
            if (listType === "bestMoviesList") {
            const movies = await getRecentExclusiveMovies(); 
            setMovies(movies.slice(0, 5)); 
        } else if (listType === "seriesList") {
            const movies = await getPopularTVShows(); 
            setMovies(movies.slice(0, 5)); 
        } else if (listType === "oscarMoviesList") {
            const movies = await getOscarNominatedMovies(); 
            setMovies(movies.slice(0, 5)); 
        }
        }; 
        fetchMovies(); 
    }, []);
        //imgUrl = "https://pics.filmaffinity.com/the_substance-153348439-mmed.jpg"


    return (
        <div>
            <ul>
            {movies.map(movie => (
                <li key={movie.id} class="list-none"><Card imgUrl={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}/></li>
            ))}
            </ul>
            <MoreArrowButton direction="Previous"  />
            <MoreArrowButton direction="Next" />
        </div>
    );
};

export default CardsSection