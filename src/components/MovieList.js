import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function MovieList(props) {
  // export default function MovieList({ movies }) {
  const FavouriteComponent = props.addFavouritesComponent;
  return (
    <>
      {props.movies.map((movie, index) => (
        // {movies.map((movie, index) => (
        <div
          className="row image-container d-flex justify-content-start m-3"
          key={index}
        >
          <img src={movie.Poster} alt="movie poster" />
          <div
            onClick={() => props.handleFavouriesClick(movie)}
            className="overlay d-flex align-items-center justify-content-center"
          >
            <FavouriteComponent />
          </div>
        </div>
      ))}
    </>
  );
}
