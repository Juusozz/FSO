import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(7).fill(0))
  const [mostPointsIndex, setIndex] = useState(0)

  const getRandomInteger = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
  
    return Math.floor(Math.random() * (max - min)) + min
  }

  const randomAnecdote = () => {
    setSelected(getRandomInteger(0,7))
    
  }

  const copy = [...points]

  const increase = () => {
    console.log(selected)
    copy[selected] += 1
    points[selected] = copy[selected]
    console.log(copy)
    let maxIndex = 0;
    let maxValue = copy[0];

    for (let i = 1; i < copy.length; i++) {
      if (copy[i] > maxValue) {
        maxValue = copy[i]
        maxIndex = i
        setIndex(i)
      }
    }
  }
  

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <button onClick = {increase}> vote </button>
      <button onClick={randomAnecdote}> next anecdote </button>
      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[mostPointsIndex]}</p>
    </div>
  )
}

export default App