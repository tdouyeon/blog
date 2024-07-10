const express = require('express')
const next = require('next')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const clientPromise = require('./app/lib/mongodb')

dotenv.config({ path: '.env.local' })

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()
  server.use(bodyParser.json())

  server.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from Express!' })
  })

  server.post('/api/login', async (req, res) => {
    const { email, password } = req.body
    try {
      const client = await clientPromise
      const db = client.db('subase')

      const user = await db.collection('login').findOne({ email })
      console.log(user)
      res.json(user)

      if (!user) {
        return res.status(401).json({ message: 'User not found' })
      }
      const isPasswordMatch = await compare(password, user.password)
      if (!isPasswordMatch) {
        return res.status(401).json({ message: 'Incorrect password' })
      }
      res.status(200).json({ message: 'Login successful' })
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
