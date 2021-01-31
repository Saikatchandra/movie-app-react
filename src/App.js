import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";
import AddFavourites from "./components/AddFavourites";
import RemoveFavourites from "./components/RemoveFavourite";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState([]);
  const [favourits, setfavourits] = useState([]);

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=954d6705`;

    const response = await fetch(url);
    const responseJson = await response.json();
    console.log("response ", responseJson);
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  // useEffect(() =>{
  //   const movieFavourite = JSON.parse(
  //       localStorage.getItem('react-favourite-movies')
  //     );    

  //   setfavourits(movieFavourite);
  // },[])


 const saveToLocalStorage=(items) => {
    localStorage.setItem('react-favourite-movies',JSON.stringify(items))    
 }

  const addFavouritesMovie = (movie) => {
    const newFavouritList = [...favourits, movie];
    setfavourits(newFavouritList);
    saveToLocalStorage(newFavouritList);
  };

  const removeFavouriteMovie = (movie) => {
      const newFavouritList = favourits.filter(
        (favourit) =>  favourit.imdbID !== movie.imdbID
      );

      setfavourits(newFavouritList);
      saveToLocalStorage(newFavouritList);
  }

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Movies" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="row">
        <MovieList
          movies={movies}
          handleFavouriesClick={addFavouritesMovie}
          addFavouritesComponent={AddFavourites}
        />
      </div>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Favourits" />
      </div>
      <div className="row">
        <MovieList
          movies={favourits}
          handleFavouriesClick={removeFavouriteMovie}
          addFavouritesComponent={RemoveFavourites}
        />
      </div>
    </div>
  );
}
