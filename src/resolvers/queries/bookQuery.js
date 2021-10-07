const { GraphQLInt } = require('graphql')
const { BookType } = require('../../types')
const { books } = require('../../data')

const bookQuery = {
  type: BookType,
  description: 'Return a single book',
  args: {
    id: { type: GraphQLInt },
  },
  resolve: (_, args) => {
    return books.find((book) => book.id === args.id)
    // Book.find({ _id: args._id })
  },
}

module.exports = bookQuery
