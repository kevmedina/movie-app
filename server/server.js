const express = require("express");
const graphqlHTTP = require("express-graphql");
const PORT = process.env.PORT || 4002;
const schema = require("./schema");

// Create an express server and a GraphQL endpoint
const app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
