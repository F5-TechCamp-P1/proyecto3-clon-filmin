import React from 'react';
import MovieList from './components/MovieList';
import List from './components/List.jsx'

function App() {
  return (
    <div className="App">
      
      <MovieList />
      
    
  
      <List listTitle="El mejor cine reciente en exclusiva" listType={bestMoviesList}/>
      <List listTitle="Series imprescindibles para todos los gustos" listType={seriesList}/>
      <List listTitle="Las candidatas al Óscar internacional de 2024" listType={oscarMoviesList}/>
      </div>
  )
}

export default App;

