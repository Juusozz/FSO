import { useState, useEffect } from 'react'
import Form from './components/form'
import FilterObject from './components/filter'
import FilteredArray from './components/filteredArray'
import './index.css' // Wanted darkmode...
import services from './services/service' // Handles the backend

const App = () => {
  
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [isThereAFilter, setIsThereAFilter] = useState(false)
  const [thisFilter, setFilter] = useState('')

  useEffect(() => {
    services.getAll()
    .then(persons => {
      setPersons(persons)
    })
  })

  const handleNameSubmit = (event) => {setNewName(event.target.value)}

  const handleNumberSubmit = (event) => {setNewNumber(event.target.value)}

  const handleFilterSubmit = (event) => {setIsThereAFilter(true)
    setFilter(event.target.value)}
  
  const People = (event) => {
    event.preventDefault()
    const inputPerson = {name: newName, number: newNumber}
    persons.some(x => x.name === inputPerson.name)
    ? alert(`${newName} is already added to phonebook`)
    : services.addPerson(inputPerson).then(returnedPerson => persons.concat(returnedPerson))
    setNewName('')
    setNewNumber('')
  }
  
  const personDelete = (id) => {
    services.removePerson(id).then(returnedPerson => persons.filter(a => a.id !== id))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <FilterObject thisFilter = {thisFilter} handleFilterSubmit = {handleFilterSubmit}/>
      <h2>add a new</h2>
      <Form addPerson = {People} newName = {newName} handleNameSubmit = {handleNameSubmit} newNumber = {newNumber} handleNumberSubmit = {handleNumberSubmit}/>
      <h2>Numbers</h2>
      <FilteredArray personDelete = {personDelete} persons = {persons} thisFilter = {thisFilter} isThereAFilter = {isThereAFilter}/>
    </div>
  )
}

export default App
