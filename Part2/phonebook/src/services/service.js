import axios from 'axios'

const URL = 'http://localhost:3001/persons'

const getAll = (persons) => {
    const command = axios.get(URL)
    return command.then(response => response.data)
}

const addPerson = (newPerson) => {
    const command = axios.post(URL, newPerson)
    return command.then(response => response.data)
}

// const removePerson = (id) => {
//     const command = axios.delete('http://localhost:3001/persons/${id}')
//     return command.then(response => response.data).catch(error => {
//   console.log(error)})
// }



export default {getAll, addPerson, removePerson}