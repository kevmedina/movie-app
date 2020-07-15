import React, { Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import "./Movies.css";
import Category from "../Category/Category";

const MOVIES_QUERY = gql`
  query MoviesQuery {
    topRatedMovies {
      id
      title
      overview
      poster_path
    }
    nowPlayingMovies {
      id
      title
      overview
      poster_path
    }
    popularMovies {
      id
      title
      overview
      poster_path
    }
  }
`;

const Movies = () => {
  return (
    <div className="movie-container">
      <header>
        <h1>Movies</h1>
      </header>
      <Query query={MOVIES_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <h4>Loading...</h4>;
          if (error) console.log(`Error: ${error}`);
          const { topRatedMovies, nowPlayingMovies, popularMovies } = data;
          return (
            <Fragment>
              {/* Top Rated Movies */}
              <Category category={topRatedMovies} title="Top Rated" />

              {/* Now Playing */}
              <Category category={nowPlayingMovies} title="Now Playing" />

              {/* Popular Movies  */}
              <Category category={popularMovies} title="Most Popular" />
            </Fragment>
          );
        }}
      </Query>
    </div>
  );
};

export default Movies;
