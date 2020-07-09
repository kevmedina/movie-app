import React, { useEffect, useState } from "react";
import "./Shows.css";
import SHOW_SERVICE from "../../services/tvShowService";
import Category from "../Category/Category";

const Shows = () => {
  const [topRatedShows, setTopRatedShows] = useState([]);
  const [popularShows, setPopularShows] = useState([]);
  const [airingToday, setAiringToday] = useState([]);

  useEffect(() => {
    SHOW_SERVICE.getTopRated()
      .then((res) => {
        setTopRatedShows(res.data.results);
      })
      .catch((err) => console.log(`Error: ${err}`));

    SHOW_SERVICE.getAiringToday()
      .then((res) => {
        setAiringToday(res.data.results);
      })
      .catch((err) => console.log(`Error: ${err}`));

    SHOW_SERVICE.getPopular()
      .then((res) => {
        setPopularShows(res.data.results);
      })
      .catch((err) => console.log(`Error: ${err}`));
  }, []);

  return (
    <div className="movie-container">
      <header>
        <h1>TV Shows</h1>
      </header>

      {/* Top Rated Movies */}
      <Category category={topRatedShows} title="Top Rated" />

      {/* Popular Movies  */}
      <Category category={airingToday} title="Airing Today" />

      {/* Now Playing */}
      <Category category={popularShows} title="Now Playing" />
    </div>
  );
};

export default Shows;
