const express = require('express')
const app = express()
const cors = require('cors')
const config = require('./utils/configs')
const Blog = require('./models/blog')
const mongoose = require('mongoose')


const mongoUrl = process.env.MONGODB_URL
console.log(`mongoURL: ${mongoUrl}`)
mongoose.connect(mongoUrl)


app.use(cors())
app.use(express.json())

app.get('/api/blogs', (request, response) => {
  Blog
    .find({})
    .then(blogs => {
      response.json(blogs)
    })
})

app.post('/api/blogs', (request, response) => {
  const blog = new Blog(request.body)

  blog
    .save()
    .then(result => {
      response.status(201).json(result)
    })
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})