import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <header>
        <div>
          <h1>Welcome to Cinema 954</h1>
          <h3>Choose from hundreds of movies or TV Shows to watch. </h3>
        </div>
        <div>
          <Link to="/movies" className="link">
            Movies
          </Link>
          <Link to="/shows" className="link">
            TV Shows
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Home;
