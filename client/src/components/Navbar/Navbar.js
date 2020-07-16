import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <div>
            <Link className="navbar-brand" to="/">
              Cinema954
            </Link>
          </div>
          <div>
            <Link to="/" className="nav-item nav-link active">
              Home
            </Link>
            <Link to="/movies" className="nav-item nav-link active">
              Movies
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
