import React, { useEffect, useState } from "react";
import axios from "axios";

const URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=series`;

const Movies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        setMovies(res.data.Search);
      })
      .catch((err) => console.log(`Error: ${err}`));
  }, []);

  return (
    <div>
      <h1>Movies</h1>
      <div>
        {movies.map((movie, i) => (
          <div key={i}>{movie.Title}</div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
