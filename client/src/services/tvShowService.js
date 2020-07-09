import axios from "axios";
const baseURL = `https://api.themoviedb.org/3`;

const service = axios.create({
  baseURL,
  withCredentials: false,
});

const SHOW_SERVICE = {
  getTopRated() {
    console.log(baseURL);
    return service.get(
      `/tv/top_rated?api_key=${process.env.REACT_APP_API_KEY}`
    );
  },

  getAiringToday() {
    return service.get(
      `/tv/airing_today?api_key=${process.env.REACT_APP_API_KEY}`
    );
  },

  getPopular() {
    return service.get(`/tv/popular?api_key=${process.env.REACT_APP_API_KEY}`);
  },

  getDetails(tv_id) {
    return service.get(`/tv/${tv_id}?api_key=${process.env.REACT_APP_API_KEY}`);
  },
};

export default SHOW_SERVICE;
