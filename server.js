const express = require('express')
const next = require('next')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const connectDB = require('./config/db')

dotenv.config({ path: '.env.local' })

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

// const database = async () => {
//   const db = (await dbConnect).db('subase')
//   let result = await db.collection('blog').find().toArray()
//   console.log(result)
// }
// database()

app.prepare().then(() => {
  const server = express()
  connectDB()
  server.use(bodyParser.json())

  server.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from Express!' })
  })

  server.get('/api/blogs', async (req, res) => {
    try {
      const db = mongoose.connection.db
      const result = await db.collection('blog').find().toArray()
      res.json(result)
    } catch (err) {
      res.status(500).json({ message: 'Failed to fetch blogs', error: err.message })
    }
  })

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  const port = process.env.PORT || 3000
  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
