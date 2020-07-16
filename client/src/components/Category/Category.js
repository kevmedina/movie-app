import React from "react";
import { Link } from "react-router-dom";
import "./Category.css";

const Category = ({ category, title }) => {
  return (
    <div className="category">
      <h3>{title}</h3>

      <div className="film-row">
        {category.length > 0
          ? category.map((movie, i) => (
              <Link
                to={{
                  pathname: `/details`,
                  state: {
                    id: movie.id,
                  },
                }}
                key={i}
                className="item"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt="movie poster"
                />
                <h4>{movie.title}</h4>
              </Link>
            ))
          : null}
      </div>
    </div>
  );
};

export default Category;
