import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link to="/" className="nav-item nav-link active">
            Home
          </Link>
          <Link to="/movies" className="nav-item nav-link active">
            Movies
          </Link>
          <Link to="/shows" className="nav-item nav-link active">
            TV Shows
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
