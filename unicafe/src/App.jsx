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
      <Button runGood = {Good} runNeutral = {Neutral} runBad = {Bad}/>
      <h2>statistics</h2>
      <Statistics good = {good} bad = {bad} neutral = {neutral} log = {log}/>
    </div>
  )
}

const Button = (props) => {
  return(
    <div>
      <button onClick = {props.runGood}> good </button>
      <button onClick = {props.runNeutral}> neutral </button>
      <button onClick = {props.runBad}> bad </button>
    </div>
  ) 
}

const StatisticLine = (props) => {
  return (
    <div>
      <p>{props.text} {props.value}</p>
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
      <StatisticLine text = "good" value = {props.good} />
      <StatisticLine text = "neutral" value = {props.neutral} />
      <StatisticLine text = "bad" value = {props.bad} />
      <StatisticLine text = "all" value = {props.good + props.bad + props.neutral} />
      <StatisticLine text = "average" value = {(props.good - props.bad)/(props.good + props.bad + props.neutral)} />
      <StatisticLine text = "positive" value = {props.good/(props.good + props.bad + props.neutral) * 100}/>
    </div>
  )
}

export default App