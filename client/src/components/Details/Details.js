import React, { useEffect, useState } from "react";
import SHOW_SERVICE from "../../services/TvShowService";
import "./Details.css";

const Details = (props) => {
  const [details, setDetails] = useState([]);
  const { id } = props.location.state;

  useEffect(() => {
    SHOW_SERVICE.getDetails(id)
      .then((res) => {
        setDetails(res.data);
      })
      .catch((err) => console.log(`Error: ${err}`));
  }, [id]);

  return (
    <div className="details-container">
      {console.log(details)}
      <h1>{details.name}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w400${details.poster_path}`}
        alt="TV Show Cover"
      />
    </div>
  );
};

export default Details;
