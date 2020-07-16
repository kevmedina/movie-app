import React, { Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import "./Details.css";

const MOVIE_DETAILS_QUERY = gql`
  query movieDetailsQuery($id: Int) {
    movie(id: $id) {
      id
      title
      overview
      poster_path
    }
  }
`;

const Details = (props) => {
  const { id } = props.location.state;

  return (
    <div className="details-container">
      <Query query={MOVIE_DETAILS_QUERY} variables={{ id }}>
        {({ loading, error, data }) => {
          if (loading) return <h4>Loading...</h4>;
          if (error) console.log(`Error: ${error}`);
          console.log("Data: ", data);
          const { title, overview, poster_path } = data.movie;
          return (
            <div className="movie-details">
              <h1>{title}</h1>
              <img
                src={`https://image.tmdb.org/t/p/w400${poster_path}`}
                alt="Movie Cover"
              />
              <p>{overview}</p>
            </div>
          );
        }}
      </Query>
    </div>
  );
};

export default Details;
