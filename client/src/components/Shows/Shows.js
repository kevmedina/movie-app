import React, { Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import "./Shows.css";
import Category from "../Category/Category";

const TV_SHOWS_QUERY = gql`
  query TvShowsQuery {
    topRatedTvShows {
      id
      title
      overview
      poster_path
    }
    tvShowsAiringToday {
      id
      title
      overview
      poster_path
    }
    popularTvShows {
      id
      title
      overview
      poster_path
    }
  }
`;

const Shows = () => {
  return (
    <div className="movie-container">
      <header>
        <h1>TV Shows</h1>
      </header>

      <Query query={TV_SHOWS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <h4>Loading...</h4>;
          if (error) console.log(`Error: ${error}`);
          const { topRatedTvShows, tvShowsAiringToday, popularTvShows } = data;

          return (
            <Fragment>
              {/* Top Rated Movies */}
              <Category category={topRatedTvShows} title="Top Rated" />

              {/* Popular Movies  */}
              <Category category={tvShowsAiringToday} title="Airing Today" />

              {/* Now Playing */}
              <Category category={popularTvShows} title="Now Playing" />
            </Fragment>
          );
        }}
      </Query>
    </div>
  );
};

export default Shows;
