const blogRouter = require('express').Router()
const Blog = require('../models/blog')
const logger = require('../utils/logger')


blogRouter.get('/blogs', (request, response) => {
  Blog
    .find({})
    .then(blogs => {
      response.json(blogs)
    })
    .catch((error) => {
      logger.error('Error in GET: ', error.message)
    })
})

blogRouter.post('/blogs', (request, response) => {
  const blog = new Blog(request.body)
  blog
    .save()
    .then(result => {
      response.status(201).json(result)
    })
    .catch((error) => {
      logger.error('Error in POST: ', error.message)
    })
})

module.exports = blogRouter