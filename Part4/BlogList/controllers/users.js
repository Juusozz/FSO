const userRouter = require('express').Router()
const { request } = require('../app')
const User = require('../models/user')
const logger = require('../utils/logger')
const bcrypt = require('bcrypt')

userRouter.post('/', async (request, response) => {
    const { name, username, password } = request.body

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password, saltRounds)



    const user = new User ({
        name,
        username,
        passwordHash
    })

    const savedUser = user.save()
    response.status(201).json(savedUser)
})

userRouter.get('/', async (request, response) => {
    const users = await User
      .find({}).populate('blogs', { url: 1, title: 1, author: 1})
    response.json(users)
  })

module.exports = userRouter