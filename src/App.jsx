import React, { createContext } from 'react';
import NavBar from './components/NavBar';
import Footer from "./components/Footer";
import List from './components/List.jsx';
import CarouselReactResponsive from './components/Carousel/carousel.jsx';
import lists from './components/list/listConfig.jsx';
import './App.css';
import './index.css';

export const ListTypeContext = createContext();

function App() {
  return (
    <div className="App">
      <NavBar lists={lists} />
      <div>
      <CarouselReactResponsive />
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