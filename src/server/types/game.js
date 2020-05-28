const graphql = require('graphql')

const GameType = new graphql.GraphQLObjectType({
  name: 'game',
  description: 'Type for games',
  fields: {
    _id: {type: graphql.GraphQLString}, // To be generated by mongo
    name: {type: graphql.GraphQLString},
    image: {type: graphql.GraphQLString},
    description: {type: graphql.GraphQLString},
    release_date: {type: graphql.GraphQLInt},
    platform: {type: graphql.GraphQLString},
    price: {type: graphql.GraphQLFloat}
  }
})

module.exports = GameType
