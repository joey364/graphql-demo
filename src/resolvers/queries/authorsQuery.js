const { GraphQLList } = require('graphql')
const { AuthorType } = require('../../types')
const { authors } = require('../../data')

const authorsQuery = {
  type: GraphQLList(AuthorType),
  description: 'A list of authors',
  resolve: () => authors,
}

module.exports = authorsQuery
