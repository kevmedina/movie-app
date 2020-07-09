import React from "react";
import { Link } from "react-router-dom";
import "./Category.css";

const Category = ({ category, title }) => {
  return (
    <div className="category">
      <h3>{title}</h3>

      <div className="film-row">
        {category.length > 0
          ? category.map((film, i) => (
              <Link
                to={{
                  pathname: `/details`,
                  state: {
                    id: film.id,
                  },
                }}
                key={i}
                className="item"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w300${film.poster_path}`}
                  alt="movie poster"
                />
                <h4>{film.title}</h4>
              </Link>
            ))
          : null}
      </div>
    </div>
  );
};

export default Category;
