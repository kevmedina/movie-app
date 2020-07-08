import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Movies.css";

const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}`;

const Movies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        console.log(res.data.results);
        setMovies(res.data.results);
      })
      .catch((err) => console.log(`Error: ${err}`));
  }, []);

  return (
    <div className="movies">
      <h1>Movies</h1>

      {/* Dropdown button for categories */}
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Categories
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#">
            Action
          </a>
          <a class="dropdown-item" href="#">
            Another action
          </a>
          <a class="dropdown-item" href="#">
            Something else here
          </a>
        </div>
      </div>

      {/* Movie Container */}
      <div className="movies-container">
        {movies.map((movie, i) => (
          <div key={i} className="movie">
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt="movie poster"
            />
            <div>
              <h4>{movie.original_title}</h4>
              {/* <p>{movie.overview}</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
