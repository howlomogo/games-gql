const mongodb = require('mongodb')
const graphql = require('graphql')

const db = require('../db')
const GameType = require('../types/game.js')

const game_query = {
  type: graphql.GraphQLList(GameType),
  args: {
    _id: {type: graphql.GraphQLString},
    name: {type: graphql.GraphQLString},
    release_date: {type: graphql.GraphQLInt},
    platform: {type: graphql.GraphQLString},
    min_price: {type: graphql.GraphQLFloat},
    max_price: {type: graphql.GraphQLFloat}
  },
  resolve: async (_, {_id, name, release_date, platform, min_price, max_price}) => {
    let db_query = {}

    // If we are searching by id this will be for 1 game
    if (_id) {
      db_query._id = mongodb.ObjectId(_id)
    } else {
      // Set name
      if (name) {
        db_query.name = { $regex: new RegExp( name, 'gi')}
      }

      // Set release date
      if (release_date) db_query.release_date = release_date

      // Set platform
      if (platform) db_query.platform = platform

      // Set price range
      if (min_price && max_price) {
        db_query.price = { $gte: min_price, $lte: max_price }
      } else if (min_price && !max_price) {
        db_query.price = { $gte: min_price }
      } else if (!min_price && max_price) {
        db_query.price = { $lte: max_price }
      }
    }

    console.log('---query', db_query)

    const games = await db.get().collection('games').find(db_query).toArray()
      .then((response) => {
        return response
      })

    console.log('---games', games)
    return games
  }
}

module.exports = game_query
