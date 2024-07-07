const express = require('express')
const router = express.Router()
const User = require('../../models/User')

router.post('/signUp/user', async (req, res) => {
  const { id, password, nickName, email, phone } = req.body

  if (!id || !password) {
    return res.status(400).json({ message: 'Id and Password are required' })
  }
  try {
    const newUser = new User({ id, password, nickName, email, phone })
    await newUser.save()
    return res.status(201).json(newUser)
  } catch (error) {
    res.status(500).json({ message: 'Failed to add User', error })
  }
})

module.exports = router
