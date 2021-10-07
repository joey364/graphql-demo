const { GraphQLNonNull, GraphQLInt, GraphQLString } = require('graphql')
const { AuthorType } = require('../../types')
const { authors } = require('../../data')

const addAuthorMutation = {
  type: AuthorType,
  description: 'Add author to collection',
  args: {
    id: {
      type: GraphQLNonNull(GraphQLInt),
    },
    name: { type: GraphQLNonNull(GraphQLString) },
  },
  resolve: (_, args) => {
    const author = { id: authors.length + 1, name: args.name }
    authors.push(author)
    return author
  },
}

module.exports = addAuthorMutation
