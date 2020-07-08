import React, { useEffect, useState } from "react";
import "./Home.css";
import MOVIE_SERVICE from "../../services/MovieService";
import Category from "../Category/Category";

const Home = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    MOVIE_SERVICE.getTopRated()
      .then((res) => {
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
    <div className="home">
      <header>
        <h1>Welcome to Cinema 954</h1>
        <h3>Choose from hundreds of movies or TV Shows to watch. </h3>
      </header>

      <section>
        {/* Top Rated Movies */}
        <Category category={topRatedMovies} title="Top Rated" />

        {/* Now Playing */}
        <Category category={nowPlayingMovies} title="Now Playing" />

        {/* Popular Movies  */}
        <Category category={popularMovies} title="Most Popular" />
      </section>
    </div>
  );
};

export default Home;
