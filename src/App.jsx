import { useState } from 'react'
import FizzBuzz from './Components/FizzBuzz/FizzBuzz'
import Stopwatch from './Components/Stopwatch/Stopwatch'

function App() {
  const [startGame, setStartGame] = useState(false)

  return (
    <>
      <h1>Fizz Buzz Game</h1>
      <button onClick={() => setStartGame(true)}>Start</button>
      <Stopwatch startOrStop={startGame}/>
      <FizzBuzz startOrStop={startGame}/>
    </>
  )
}

export default App
