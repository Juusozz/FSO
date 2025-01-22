const express = require('express')
const app = express()
const cors = require('cors')
const config = require('./utils/configs')
const mongoose = require('mongoose')
const logger = require('./utils/logger')
const blogRouter = require('./controllers/blogs')
const userRouter = require('./controllers/users')


mongoose.set('strictQuery', false)

logger.info('Connecting to MongoDB')

mongoose.connect(config.MONGODB_URI)
  .then(() => {
    logger.info('connected')
  })
  .catch((error) => {
    logger.error('error: ', error.message)
  })

app.use(cors())
app.use(express.static('dist'))
app.use(express.json())

app.use('/api/blogs', blogRouter)
app.use('/api/users', userRouter)

module.exports = app