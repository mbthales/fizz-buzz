import { useEffect, useState } from 'react'

function Stopwatch({ teste }) {
  const [sec, setSec] = useState(0)
  const [mili, setMili] = useState(0)

  useEffect(() => {
    if(teste){
      const timer = setInterval(() => {
        setMili(mili => mili + 1)
      }, 10)

      if(mili === 99){
        setSec(sec => sec + 1)
        setMili(0)
      }

      return () => clearInterval(timer)
    }
  })

  return (
    <>
      <p>{sec}:{mili}</p>
    </>
  )
}

export default Stopwatch
