import { useEffect, useState } from 'react'

function Stopwatch({ startOrStop }) {
  const [seconds, setSeconds] = useState(0)
  const [mili, setMili] = useState(0)

  useEffect(() => {
    if(startOrStop){
      const test = setInterval(() => {
        setMili(mili => mili + 1)
      }, 10)

      if(mili === 99){
        setSeconds(seconds => seconds + 1)
        setMili(0)
      }

      return () => clearInterval(test)
    }
  })

  return (
    <>
      <p>{seconds}:{mili}</p>
    </>
  )
}

export default Stopwatch
