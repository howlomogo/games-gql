const mongodb = require('mongodb')
var graphql = require('graphql')
var MongoClient = require('mongodb').MongoClient

const db = require('../db');
const GameType = require('../types/game.js')

const game_mutation = new graphql.GraphQLObjectType({
  name: 'Mutation',
  fields: {
    insertGame: {
      type: graphql.GraphQLString, // We can just return a string to say whether the game was added or not
      args: {
        name: {type: graphql.GraphQLString},
        release_date: {type: graphql.GraphQLInt},
        platform: {type: graphql.GraphQLString},
        price: {type: graphql.GraphQLFloat}
      },
      resolve: async (_, {name, release_date, platform, price}) => {

        // TODO add validation and error checking
        await db.get().collection('games').insert({
          name: name,
          image: "",
          description: "",
          release_date: release_date,
          platform: platform,
          price: price
        })

        console.log(name, release_date, platform, price)
        return `${name} has been added`
      }
    },
    deleteGame: {
      type: graphql.GraphQLString,
      args: {
        _id: { type: graphql.GraphQLString}
      },
      resolve: async (_, {_id}) => {
        console.log(_id)
        await db.get().collection('games').deleteOne( {
          _id: mongodb.ObjectId(_id)
        })

        // TODO add validation / error checking
        // We are just assuming it was successful.
        return `Game with the id of ${_id} has been deleted`
      }
    },
    updateGame: {
      type: graphql.GraphQLString,
      args: {
        _id: { type: graphql.GraphQLString },
        name: {type: graphql.GraphQLString},
        image: {type: graphql.GraphQLString},
        description: {type: graphql.GraphQLString},
        release_date: {type: graphql.GraphQLInt},
        platform: {type: graphql.GraphQLString},
        price: {type: graphql.GraphQLFloat}
      },
      resolve: async (_, {
        _id,
        name,
        image,
        description,
        release_date,
        platform,
        price,
      }) => {
        let db_query = {}

        // Set name
        if (name) db_query.name = name
        if (image) db_query.image = image
        if (description) db_query.description = description
        if (release_date) db_query.release_date = release_date
        if (platform) db_query.platform = platform
        if (price) db_query.price = price

        await db.get().collection('games').findOneAndUpdate( {
          _id: mongodb.ObjectId(_id)
        }, {
          $set: db_query
        })



        // TODO add validation / error checking
        // We are just assuming it was successful.
        return `${name} has been updated using the details provided`
      }
    }
  }
})

module.exports = game_mutation
