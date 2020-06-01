var graphql = require('graphql')
const user = require('./user.js')
const game = require('./game.js')

var RootQuery = new graphql.GraphQLObjectType({
  name: 'RootQuery',
  description: 'Root Query',
  fields: {
    user,
    game
  }
})

module.exports = RootQuery
