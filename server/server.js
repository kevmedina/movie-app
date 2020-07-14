require("dotenv").config();

const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema");
const cors = require("cors");
const PORT = process.env.PORT || 4002;

// Create an express server and a GraphQL endpoint
const app = express();

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
