const axios = require("axios");
const baseURL = `https://api.themoviedb.org/3`;

const service = axios.create({
  baseURL,
  withCredentials: false,
});

const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
} = require("graphql");

const MovieType = new GraphQLObjectType({
  name: "Movie",
  fields: () => ({
    id: { type: GraphQLInt },
    title: { type: GraphQLString },
    overview: { type: GraphQLString },
  }),
});

const TvShowType = new GraphQLObjectType({
  name: "TvShow",
  fields: () => ({
    id: { type: GraphQLInt },
    title: { type: GraphQLString },
    overview: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    movie: {
      type: MovieType,
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        return service
          .get(`/tv/${args.id}?api_key=${process.env.REACT_APP_API_KEY}`)
          .then((res) => res.data.results);
      },
    },
    tvShow: {
      type: TvShowType,
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        return service
          .get(`/movie/${args.id}?api_key=${process.env.REACT_APP_API_KEY}`)
          .then((res) => res.data.results);
      },
    },
    topRatedMovies: {
      type: new GraphQLList(MovieType),
      resolve(parent, args) {
        return service
          .get(`/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}`)
          .then((res) => res.data.results);
      },
    },
    topRatedTvShows: {
      type: new GraphQLList(TvShowType),
      resolve(parent, args) {
        return service
          .get(`/tv/top_rated?api_key=${process.env.REACT_APP_API_KEY}`)
          .then((res) => res.data.results);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
