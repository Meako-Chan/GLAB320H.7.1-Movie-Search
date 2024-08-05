
import { useState, useEffect } from 'react';
import './App.css';
import MovieDisplay from './MovieDisplay';
import Form from './Form';

export default function App() {
  //variable with your apiKey
  const apiKey = "a230495f";

  //State to hold movie data
  const [movie, setMovie] = useState(null);

  //Function to getMovies
  const getMovie = async (searchTerm) => {
    // make fetch request and store response
    try{
      const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );
    // Parse JSON response into a javascript object
    const data = await response.json();
    //set the Movie state to the movie
    setMovie(data);
  } catch(e){
    console.error(e)
  }
  };

  useEffect(() => {
    getMovie("Interstellar");
  }, []);

  // USE OUR COMPONENTS IN APPs RETURNED JSX
  // We pass the getMovie function as a prop called moviesearch
  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}
