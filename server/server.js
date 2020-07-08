const express = require("express");
const graphqHTTP = require("express-graphql");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 4002;

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(
  "/graphql",
  graphqHTTP({
    graphiql: true,
  })
);

app.listen(PORT, console.log(`Server is running on port ${PORT}`));
