import React from 'react';
import './App.css';
import MovieList from './components/MovieList';

// Need to import MovieList to show the movies on the app.

function App() {
  return (
    <div className='App'>
      <h1>Movies</h1>
      <MovieList />
    </div>
  );
}

export default App;
