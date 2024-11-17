import { useState, useEffect} from 'react'
import React from 'react'
import services from './services/services'
import PrintOneCountry from './components/printSpecific'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')
  const [selectedCountry, setSelectedCountry] = useState(null)

  useEffect(() => {
    services.getCountries()
    .then(i => {setCountries(i)})
  }, [])

  const sortedArray = countries.filter(i => i.name.common.toLowerCase().includes(filter.toLowerCase()))

  const handleFilterSubmit = (event) => {
    event.preventDefault()
    setFilter(event.target.value)
    setSelectedCountry(null)
  }

  const PrintCountries = () => {
    if (sortedArray.length < 11) {
      if (sortedArray.length === 1) {
        return <PrintOneCountry country = {sortedArray[0]}/>
      } else {
        return sortedArray.map((country) => (<p key={country.name.common}>{country.name.common} <button onClick = {() => setSelectedCountry(country)}>show</button></p>))
      }
    }else {
      return <p>Too many matches, specify another filter</p>
    }
  }

  return (
    <div>
      find countries: <input value = {filter} onChange={handleFilterSubmit} />
      <div>
        {selectedCountry ? (
          <PrintOneCountry country = {selectedCountry} />
        ) : (
          <PrintCountries />
        )
        }
      </div>
    </div>
  )
}

export default App
