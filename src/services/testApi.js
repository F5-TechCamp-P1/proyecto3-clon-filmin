import { getHighlightedMovies, getPopularSeries } from './api.js';


getHighlightedMovies()
  .then(response => response.json())
  .then(data => console.log('El mejor cine reciente en exclusiva:', data))
  .catch(error => console.error(error));
  
  getPopularSeries()
    .then(response => respinse.jason())
    .then(data => console.log('Series imprescindibles para todos los gustos:', data))
    .catch(error => console.error(error));
    