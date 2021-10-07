const { AuthorType } = require('../../types')
const { GraphQLInt } = require('graphql')
const { authors } = require('../../data')

const authorQuery = {
  type: AuthorType,
  description: 'An author of a book',
  args: {
    id: { type: GraphQLInt },
  },
  resolve: (_, args) => {
    return authors.find((author) => author.id === args.id)
  },
}

module.exports = authorQuery
