import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <Link to="/" class="nav-item nav-link active">
            Home
          </Link>
          <Link to="/movies" class="nav-item nav-link active">
            Movies
          </Link>
          <Link to="/shows" class="nav-item nav-link active">
            TV Shows
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
