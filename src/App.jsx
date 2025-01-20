//import MovieList from './components/MovieList';
import React, {createContext} from 'react'
import List from './components/List.jsx'
import './App.css'

export const ListTypeContext=createContext()

function App() {
  return (
    <div className="App">
      
      {/* <MovieList /> */}
    
      <ListTypeContext.Provider value="bestMoviesList">
        <List listTitle="El mejor cine reciente en exclusiva" />
      </ListTypeContext.Provider>
      
      <ListTypeContext.Provider value="seriesList">
        <List listTitle="Series imprescindibles para todos los gustos" />
      </ListTypeContext.Provider>
      
      <ListTypeContext.Provider value="oscarMoviesList">
        <List listTitle="Las candidatas al Óscar internacional de 2024" />
      </ListTypeContext.Provider>
    </div>
  )
}

export default App;

