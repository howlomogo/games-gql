var graphql = require('graphql')
var UserType = require('../types/user.js')

var userJson = require('../db-mock/user.json')
var userDbMock = userJson.userDbMock

const user_query = {
  type: UserType,
  // `args` describes the arguments that the `user` query accepts
  args: {
    id: { type: graphql.GraphQLInt},
    noOfFriends: { type: graphql.GraphQLInt}
  },
  resolve: (_, {id, noOfFriends}) => {
    // if (!noOfFriends) return Promise.reject(new Error('Must pass number of friends'))
    console.log('--noOfFriends', noOfFriends)
    let newUser = userDbMock[id]

    newUser.friends = []
    for (let i = 0; i < noOfFriends; i++) {
      newUser.friends.push('friend')
    }
    return newUser
  }
}

module.exports = user_query
