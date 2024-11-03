import axios from 'axios'

const getCountries = () => {
    const command = axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
    return command.then(response => response.data)
}



export default {getCountries}