import { useState } from 'react'
import Form from './components/form'
import FilterObject from './components/filter'
import FilteredArray from './components/filteredArray'

const App = () => {
  
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [isThereAFilter, setIsThereAFilter] = useState(false)
  const [thisFilter, setFilter] = useState('')

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