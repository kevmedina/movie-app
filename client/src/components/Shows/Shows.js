import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Shows.css";

const URL = `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_API_KEY}`;

const Shows = () => {
  const [shows, setShows] = useState([]);
  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        console.log(res.data.results);
        setShows(res.data.results);
      })
      .catch((err) => console.log(`Error: ${err}`));
  }, []);

  return (
    <div>
      <h1>TV Shows</h1>
      <div className="shows-container">
        {shows.map((show, i) => (
          <div key={i} className="show">
            <img
              src={`https://image.tmdb.org/t/p/w300${show.poster_path}`}
              alt="show poster"
            />
            <div>
              <h4>{show.name}</h4>
              <p>{show.overview}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shows;
