const { GraphQLList } = require('graphql')
const { BookType } = require('../../types')
const { books } = require('../../data')

const booksQuery = {
  type: GraphQLList(BookType),
  description: 'A list of books',
  resolve: () => books,
}

module.exports = booksQuery
