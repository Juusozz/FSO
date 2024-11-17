const PrintOneCountry = ({country}) => {
  const flag = country.flags.png
  return (
    <div>
      <h2>{country.name.common}</h2>
      <ul>
        <li>Capital {country.capital}</li>
        <li>Area {country.area}</li>
      </ul>
      <b>Languages:</b>
      <ul>
        {Object.entries(country.languages).map(([code, language]) => <li key = {code}>{language}</li>)}
      </ul>
      <img src = {flag} width = '200'/>
    </div>
  )
}

export default PrintOneCountry
