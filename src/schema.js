const {
  GraphQLSchema,
  GraphQLObjectType,
} = require('graphql')
const { authorQuery, authorsQuery, booksQuery, bookQuery } = require('./resolvers/queries')
const { addAuthorMutation, addBookMutation } = require('./resolvers/mutations')

const RootQueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'The root query',
  fields: () => ({
    authorQuery,
    authorsQuery,
    bookQuery,
    booksQuery,
  }),
})

const RootMutationType = new GraphQLObjectType({
  name: 'Mutation',
  description: 'The root mutation',
  fields: () => ({
    addAuthorMutation,
    addBookMutation
  }),
})

const Schema = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType,
})

module.exports = Schema
