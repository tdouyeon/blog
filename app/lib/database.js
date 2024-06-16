const { MongoClient } = require('mongodb')

const url = process.env.NEXT_PUBLIC_MONGODB_URL
let connectDB

if (process.env.NODE_ENV === 'development') {
  if (!global._mongo) {
    global._mongo = new MongoClient(url).connect()
  }
  connectDB = global._mongo
} else {
  connectDB = new MongoClient(url).connect()
}
module.exports = { connectDB }
