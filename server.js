const express = require('express')
const next = require('next')
const dotenv = require('dotenv')
dotenv.config({ path: '.env.local' })

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const { connectDB } = require('./app/lib/database')
const database = async () => {
  const db = (await connectDB).db('subase')
  let result = await db.collection('blog').find().toArray()
  console.log(result)
}
database()

app.prepare().then(() => {
  const server = express()

  server.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from Express!' })
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
