const express = require("express");
const app = express();
const { graphqlHTTP } = require("express-graphql");
const PORT = 3000;
const schema = require("./schema");

app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema,
  })
);

app.listen(PORT, () => {
  console.log(`Server is up and running on ${PORT}/graphql`);
});
