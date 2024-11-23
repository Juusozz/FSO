require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const Note = require('./models/note')

app.use(express.json())
app.use(cors())
app.use(express.static('dist'))

let notes = []
Note.find({}).then(note => {
  notes.push(note)
})

// GET all notes
app.get('/api/notes', (request, response) => {
  Note.find({}).then(notes => {
    response.json(notes)
  })
})

// GET specific note
app.get('/api/notes/:id', (request, response, next) => {
  Note.findById(request.params.id)
  .then(note => {
    if (note) {
      response.json(note)
    } else {
      response.status(404).end()
    }
  })
  .catch(error => next(error))
})

// DELETE a note
app.delete('/api/notes/:id', (request, response) => {
  Note.findByIdAndDelete(request.params.id)
  .then(result => {response.status(204).end()})
  .catch(error => next(error))
})

// POST a note
app.post('/api/notes', (request, response, next) => {
  const body = request.body

  const note = new Note ({
    content: body.content,
    important: body.important || false,
  })

  note.save().then(savedNote => {
    response.json(savedNote)
  })
  .catch(error => next(error))
})

// Change importance of a note
app.put('/api/notes/:id', (request, response, next) => {
  const {content, important} = request.body

  const note = {
    content: body.content,
    important: body.important
  }

  Note.findByIdAndUpdate(
    request.params.id, 
    {content, important}, 
    {new: true, runValidators: true, context: 'query'}
  )
  .then(updatedNote => {response.json(updatedNote)})
  .catch(error => next(error))
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}
app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
  console.error(error.message)
  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({error: error.message})
  }

  next(error)
}
app.use(errorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`)
})