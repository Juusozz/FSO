import { useState, useEffect } from 'react'
import Form from './components/form'
import FilterObject from './components/filter'
import PrintPerson from './components/printPerson'
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
    const existingPerson = persons.find(i => i.name === newName)
    persons.some(x => x.name === inputPerson.name)
    ? window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)
      ? services.changeNumber(existingPerson, newNumber)
      : inputPerson
    : services.addPerson(inputPerson).then(returnedPerson => persons.concat(returnedPerson))
    setNewName('')
    setNewNumber('')
  }

  const newArray = isThereAFilter
    ? persons.filter(a => a.name.toLowerCase().includes(thisFilter.toLowerCase()))
    : persons
  
  const personDelete = (i) => {
    window.confirm(`Delete ${i.name}?`)
    ? services.removePerson(i.id).then(returnedPerson => persons.filter(a => a.id !== i.id))
    : persons
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <FilterObject thisFilter = {thisFilter} handleFilterSubmit = {handleFilterSubmit}/>
      <h2>add a new</h2>
      <Form addPerson = {People} newName = {newName} handleNameSubmit = {handleNameSubmit} newNumber = {newNumber} handleNumberSubmit = {handleNumberSubmit}/>
      <h2>Numbers</h2>
      <ul>
        {newArray.map(i =>
        <PrintPerson key = {i.id}
        name = {i.name}
        number = {i.number}
        personDelete = {() => personDelete(i)} />
        )}
      </ul>
    </div>
  )
}

export default App
