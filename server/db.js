const mongoClient = require('mongodb').MongoClient
const mongoDbUrl = 'mongodb://localhost:27017'
let mongodb

function connect(callback){
  mongoClient.connect(mongoDbUrl, (err, client) => {
    mongodb = client.db('gamesdb')
      callback()
    })
}
function get(){
    return mongodb
}

function close(){
    mongodb.close()
}

module.exports = {
    connect,
    get,
    close
};
