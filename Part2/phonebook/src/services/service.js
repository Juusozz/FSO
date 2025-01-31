import axios from 'axios'

const URL = 'api/persons/'

const getAll = (persons) => {
    const command = axios.get(URL)
    return command.then(response => response.data)
}

const addPerson = (newPerson) => {
    const command = axios.post(URL, newPerson)
    return command.then(response => response.data)
}

const removePerson = (id) => {
    
    const command = axios.delete(`${URL}${id}`)
    return command.then(response => response.data).catch(error => {
  console.log(error)})
}

const changeNumber = (existingPerson, newNumber) => {
    console.log(`${URL}${existingPerson.id}`)
    const command = axios.put(`${URL}${existingPerson.id}`, {
        name: existingPerson.name,
        number: newNumber
    })
    return command.then(response => response.data)
}

export default {getAll, addPerson, removePerson, changeNumber}