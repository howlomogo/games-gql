var graphql = require('graphql')

const UserType = new graphql.GraphQLObjectType({
  name: 'user',
  description: 'Description for user',
  fields: {
    id: {type: graphql.GraphQLInt},
    firstname: { type: graphql.GraphQLString},
    middlename: { type: graphql.GraphQLString},
    // middlename: {type: graphql.GraphQLNonNull(graphql.GraphQLString)}, // To ensure middlename is not returned as null
    surname: { type: graphql.GraphQLString},
    age: { type: graphql.GraphQLInt},
    friends: { type: graphql.GraphQLList(graphql.GraphQLString)}
  }
})

module.exports = UserType
