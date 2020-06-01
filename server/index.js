var express = require('express')
var graphqlHTTP = require('express-graphql')
var graphql = require('graphql')
const db = require('./db')

const UserType = require('./types/user.js')

const RootQuery = require('./queries/index.js')
const GameMutation = require('./mutations/game.js')

var schema = new graphql.GraphQLSchema({query: RootQuery, mutation: GameMutation})

db.connect(() => {
  app.listen(process.env.PORT || 5555, function (){
    console.log(`Listening`)
  })
})

var app = express()
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));
app.listen(4000)
console.log('Running a GraphQL API server at localhost:4000/graphql')
