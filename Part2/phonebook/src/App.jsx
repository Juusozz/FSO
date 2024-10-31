import { useState, useEffect } from 'react'
import Form from './components/form'
import FilterObject from './components/filter'
import PrintPerson from './components/printPerson'
import './index.css' 
import services from './services/service' 
import Notification from './components/notification'

const App = () => {
  
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [isThereAFilter, setIsThereAFilter] = useState(false)
  const [thisFilter, setFilter] = useState('')
  const [notification, setNotification] = useState(null)

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
    if (existingPerson){
        if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
          services.changeNumber(existingPerson, newNumber);
          setNotification(`Changed phonenumber of ${newName}`);
          setTimeout(() => {
            setNotification(null)
          }, 5000);
        }
    } else{
      services.addPerson(inputPerson).then(returnedPerson => persons.concat(returnedPerson));
      setNotification(`Added ${newName}`);
          setTimeout(() => {
            setNotification(null)
          }, 5000);
    }
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
    setNotification(`Deleted ${i.name}`);
          setTimeout(() => {
            setNotification(null)
          }, 5000);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message = {notification}/>
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
