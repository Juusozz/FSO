import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const Good = () => {
    setGood(good + 1)
    // console.log(good)
  }

  const Neutral = () => {
    setNeutral(neutral + 1)
    // console.log(neutral)
  }

  const Bad = () => {
    setBad(bad + 1)
    // console.log(bad)
  }

  return (
    <div>
      <h2>give feedback</h2>
      <button onClick = {Good}> good </button>
      <button onClick = {Neutral}> neutral </button>
      <button onClick = {Bad}> bad </button>
      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {good + bad + neutral}</p>
      <p>average {(good - bad)/(good + bad + neutral)}</p>
      <p>positive {good/(good + bad + neutral) * 100} %</p>
    </div>
  )
}

export default App