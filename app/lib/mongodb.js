const { MongoClient } = require('mongodb')
const dotenv = require('dotenv')

dotenv.config({ path: '.env.local' })

const uri = process.env.NEXT_PUBLIC_MONGODB_URL
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}

if (!process.env.NEXT_PUBLIC_MONGODB_URL) {
  throw new Error('Please add your MongoDB URI to .env.local')
}

let client = new MongoClient(uri, options)
clientPromise = client.connect()
console.log('connect db')

module.exports = clientPromise
