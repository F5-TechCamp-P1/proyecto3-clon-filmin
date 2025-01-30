import React, { useEffect, useState, createContext } from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import List from './components/List.jsx';
import CarouselReactResponsive from './components/Carousel/carousel.jsx';
import lists from './components/list/listConfig.jsx';
import './App.css';
import './index.css';
import { getPopularMovies } from './services/tmdbApi';

export const ListTypeContext = createContext();

function App() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
      const fetchPopularMovies = async () => {
      try {
        const movies = await getPopularMovies();
        setPopularMovies(movies);
      } catch (error) {
        console.error('Failed to fetch popular movies:', error);
      }
    };

    fetchPopularMovies();
  }, []);

  return (
    <div className="App">
      <NavBar lists={lists} />
      <div>
        <CarouselReactResponsive />
<<<<<<< Updated upstream
=======
      </div>

      {/* Render fetched popular movies */}
      <div>
        <h2>Popular Movies</h2>
        {popularMovies.map((movie) => (
          <div key={movie.id}>{movie.title}</div>
        ))}
>>>>>>> Stashed changes
      </div>

      {lists.map((list) => (
        <ListTypeContext.Provider value={list.id} key={list.id}>
          <div id={list.id}>
            <List listTitle={list.title} fetchList={list.fetchFunction} />
          </div>
        </ListTypeContext.Provider>
      ))}

      <Footer />
    </div>
  );
}

export default App;
<<<<<<< Updated upstream


=======
>>>>>>> Stashed changes
