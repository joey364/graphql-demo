const express = require("express")
const mongoose = require('mongoose')
const { graphqlHTTP } = require("express-graphql")

const app = express()
const schema = require("./schema")

const PORT = process.env.PORT ?? 3000;

mongoose.connect('http://localhost:27017/graphql-demo', (err) => {
  if (err) {
    console.warn('Not connected to database')
    console.error(err)
  }
  else { console.log('Connected to database') }
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// main entry point 
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
