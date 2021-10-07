const { GraphQLNonNull, GraphQLInt, GraphQLString } = require('graphql')
const { BookType } = require('../../types')
const { books } = require('../../data')

const addBookMutation = {
  type: BookType,
  description: 'Add book to collection',
  args: {
    id: {
      type: GraphQLNonNull(GraphQLInt),
    },
    name: {
      type: GraphQLNonNull(GraphQLString),
    },
    authorId: {
      type: GraphQLNonNull(GraphQLInt),
    },
  },
  resolve: (_, args) => {
    const book = {
      id: books.length + 1,
      name: args.name,
      authorId: args.authorId,
    }
    books.push(book)
    return book
  },
}

module.exports = addBookMutation
