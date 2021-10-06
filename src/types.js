const { authors, books } = require("./data");
const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLString,
} = require("graphql");

const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLNonNull(GraphQLString) },
    books: {
      type: GraphQLList(BookType),
      description: "Books written by author",
      resolve: (author) => {
        return books.filter((book) => author.id === book.authorId);
      },
    },
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
  author: {
    type: AuthorType,
    description: "Authors of a book",
    resolve: (book) => {
      return authors.find((author) => book.authorId === author.id);
    },
  },
});

module.exports = { AuthorType, BookType };
