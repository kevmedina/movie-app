import React from "react";
import "./Category.css";

const Category = ({ category, title }) => {
  return (
    <div className="category">
      <h3>{title}</h3>

      <div className="film-row">
        {category.length > 0
          ? category.map((movie, i) => (
              <div key={i} className="movie">
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt="movie poster"
                />
                <div>
                  <h4>{movie.title}</h4>
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default Category;
