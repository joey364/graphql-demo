const express = require("express");
const app = express();
const { graphqlHTTP } = require("express-graphql");
const PORT = 3000;
const Schema = require("./schema");

app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema: Schema,
  })
);

app.listen(PORT, function () {
  console.log(`Server is up and running on ${PORT} `);
});
