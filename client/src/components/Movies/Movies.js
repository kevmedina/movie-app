import React, { useEffect, useState } from "react";
import "./Movies.css";
import MOVIE_SERVICE from "../../services/MovieService";
import Category from "../Category/Category";

const Movies = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    MOVIE_SERVICE.getTopRated()
      .then((res) => {
        console.log(res.data.results);
        setTopRatedMovies(res.data.results);
      })
      .catch((err) => console.log(`Error: ${err}`));

    MOVIE_SERVICE.getNowPlaying()
      .then((res) => {
        setNowPlayingMovies(res.data.results);
      })
      .catch((err) => console.log(`Error: ${err}`));

    MOVIE_SERVICE.getPopular()
      .then((res) => {
        setPopularMovies(res.data.results);
      })
      .catch((err) => console.log(`Error: ${err}`));
  }, []);

  return (
    <div className="movie-container">
      <header>
        <h1>Movies</h1>
      </header>

      {/* Top Rated Movies */}
      <Category category={topRatedMovies} title="Top Rated" />

      {/* Now Playing */}
      <Category category={nowPlayingMovies} title="Now Playing" />

      {/* Popular Movies  */}
      <Category category={popularMovies} title="Most Popular" />
    </div>
  );
};

export default Movies;
