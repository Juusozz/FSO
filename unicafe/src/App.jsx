import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [log, setLog] = useState(false)

  const Good = () => {
    setGood(good + 1)
    // console.log(good)
    console.log(log)
    setLog(true)
  }

  const Neutral = () => {
    setNeutral(neutral + 1)
    // console.log(neutral)
    setLog(true)
  }

  const Bad = () => {
    setBad(bad + 1)
    // console.log(bad)
    setLog(true)
  }

  return (
    <div>
      <h2>give feedback</h2>
      <button onClick = {Good}> good </button>
      <button onClick = {Neutral}> neutral </button>
      <button onClick = {Bad}> bad </button>
      <h2>statistics</h2>
      <Statistics good = {good} bad = {bad} neutral = {neutral} log = {log}/>
    </div>
  )
}

const Statistics = (props) => {
  if (props.log === false) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  return (
    <div>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {props.good + props.bad + props.neutral}</p>
      <p>average {(props.good - props.bad)/(props.good + props.bad + props.neutral)}</p>
      <p>positive {props.good/(props.good + props.bad + props.neutral) * 100} %</p>
    </div>
  )
}

export default App