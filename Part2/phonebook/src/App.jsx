import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas', number: '0401948938'}]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const inputPerson = {name: newName, number: newNumber}
    console.log(inputPerson)
    persons.some((x) => x.name === inputPerson.name)
    ? alert(`${newName} is already added to phonebook`)
    : setPersons(persons.concat(inputPerson))
    setNewName('')
    setNewNumber('')
  }

  const handleNameSubmit = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberSubmit = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit = {addPerson}>
        <div> name: <input value = {newName} onChange={handleNameSubmit}/></div>
        <div> number: <input value = {newNumber} onChange = {handleNumberSubmit} /></div>
        <div><button type="submit">add</button></div>
      </form>
      <h2>Numbers</h2>
      {persons.map(i => <div key={i.name}><p>{i.name} {i.number}</p> </div>)}
    </div>
  )
}

export default App