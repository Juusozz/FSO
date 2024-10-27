import { useState, useEffect } from 'react'
import Form from './components/form'
import FilterObject from './components/filter'
import FilteredArray from './components/filteredArray'
import axios from 'axios'

const App = () => {
  
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [isThereAFilter, setIsThereAFilter] = useState(false)
  const [thisFilter, setFilter] = useState('')

  useEffect(() => {
    axios
    .get('http://localhost:3001/persons')
    .then(response => {
      setPersons(response.data)
    })
  })


  const handleNameSubmit = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberSubmit = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterSubmit = (event) => {
    setIsThereAFilter(true)
    setFilter(event.target.value)
  }
  const People = (event) => {
    event.preventDefault()
    const inputPerson = {name: newName, number: newNumber}
    persons.some((x) => x.name === inputPerson.name)
    ? alert(`${newName} is already added to phonebook`)
    : setPersons(persons.concat(inputPerson))
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <FilterObject thisFilter = {thisFilter} handleFilterSubmit = {handleFilterSubmit}/>
      <h2>add a new</h2>
      <Form addPerson = {People} newName = {newName} handleNameSubmit = {handleNameSubmit} newNumber = {newNumber} handleNumberSubmit = {handleNumberSubmit}/>
      <h2>Numbers</h2>
      <FilteredArray persons = {persons} thisFilter = {thisFilter} isThereAFilter = {isThereAFilter}/>
    </div>
  )
}

export default App