import axios from "axios";
const baseURL = `https://api.themoviedb.org/3`;

const service = axios.create({
  baseURL,
  withCredentials: false,
});

const MOVIE_SERVICE = {
  getTopRated() {
    console.log(baseURL);
    return service.get(
      `/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}`
    );
  },

  getNowPlaying() {
    return service.get(
      `/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}`
    );
  },

  getPopular() {
    return service.get(
      `/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`
    );
  },
};

export default MOVIE_SERVICE;
