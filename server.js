const express = require("express");
const app = express();
const { graphqlHTTP } = require("express-graphql");
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLString,
} = require("graphql");
const { authors, books } = require("./data");
const PORT = 3000;

const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLNonNull(GraphQLString) },
  }),
});
const BookType = new GraphQLObjectType({
  name: "Book",
  description: "A Single Book",
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLNonNull(GraphQLString) },
    authorId: { type: GraphQLNonNull(GraphQLInt) },
  }),
});

const RootQueryType = new GraphQLObjectType({
  name: "Query",
  description: "The root query",
  fields: () => ({
    book: {
      type: BookType,
      description: "Return a single book",
      args: {
        id: { type: GraphQLInt },
      },
      resolve: (_, args) => {
        return books.find((book) => book.id === args.id);
      },
    },
    books: {
      type: GraphQLList(BookType),
      description: "A list of books",
      resolve: () => books,
    },
    author: {
      type: AuthorType,
      description: "An author of a book",
      args: {
        id: { type: GraphQLInt },
      },
      resolve: (_, args) => {
        return authors.find((author) => author.id === args.id);
      },
    },

    authors: {
      type: GraphQLList(AuthorType),
      description: "A list of authors",
      resolve: () => authors,
    },
  }),
});

// const RootMutationType = new GraphQLObjectType({
//   name: "Mutation",
//   description: "The root mutation",
//   fields: () => ({}),
// });

const schema = new GraphQLSchema({
  query: RootQueryType,
  // mutation: RootMutationType,
});

app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema: schema,
  })
);

app.listen(PORT, function () {
  console.log(`Server is up and running on ${PORT} `);
});
