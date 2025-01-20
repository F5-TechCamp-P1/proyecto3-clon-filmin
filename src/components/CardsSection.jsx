import {ListTypeContext} from '../App'
import Card from '../components/Card'
import MoreArrowButton from '../components/MoreArrowButton'
import React, { useEffect, useState, useContext, createContext} from 'react';
import { getRecentExclusiveMovies, getPopularTVShows, getOscarNominatedMovies} from '../services/tmdbApi';

export const MovieInfo = createContext();


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

    return (
        <div>
            <ul className="flex">
            {movies.map(movie => (
                <MovieInfo.Provider value={movie.title} key={movie.id}>
                    <li>
                        <Card imgUrl={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}/>
                        {console.log('in card section', movie.title)}
                    </li>    
                </MovieInfo.Provider>
            ))}
            </ul>
            <MoreArrowButton direction="Previous"  />
            <MoreArrowButton direction="Next" />
        </div>
    );
};

export default CardsSection