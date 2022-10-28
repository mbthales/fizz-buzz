import { useState, useEffect } from 'react'

function App() {
  const [stopwatchStatus, setStopwatchStatus] = useState('stop')

  const [sec, setSec] = useState(0)
  const [mili, setMili] = useState(0)

  const [curNum, setCurNum] = useState(1)
  const [answer, setAnswer] = useState(curNum.toString())

  const [record, setRecord] = useState('0:0')

  useEffect(() => {
    return stopwatchLogic()
  })

  useEffect(() =>{
    updateCorrectAnswer()
  }, [curNum])

  const stopwatchLogic = () => {
    if(stopwatchStatus === 'play'){
      const timer = setInterval(() => {
        setMili(mili => mili + 1)
      }, 10)

      if(mili === 99){
        setSec(sec => sec + 1)
        setMili(0)
      }

      return () => clearInterval(timer)
    }
  }

  const updateCorrectAnswer = () => {
    if(curNum % 3 === 0){
      setAnswer('fizz')
    } else if(curNum % 5 === 0){
      setAnswer('buzz')
    } else if(curNum % 15 === 0){
      setAnswer('fizzbuzz')
    } else {
      setAnswer(curNum.toString())
    }
  }

  const checkIfAnswerIsCorrect = (e) => {
    const target = e.target.id

    if(target === answer){
      setCurNum(num => num + 1)
    } else{
      checkRecord()
      resetGame()
    }
  }

  const resetGame = () => {
    setCurNum(1)
    setSec(0)
    setMili(0)
    setStopwatchStatus('stop');
  }

  const checkRecord = () => {
    const curRecord = record.split(':')
    const curRecordSec = curRecord[0]
    const curRecordMili = curRecord[1]

    if(sec > curRecordSec){
      setRecord(`${sec}:${mili}`)
    } else if (sec === curRecordSec && mili > curRecordMili){
      setRecord(`${sec}:${mili}`)
    }  
  }

  return (
    <>
      <h1>Record &gt; {record}</h1>
      <h1>Fizz Buzz Game</h1>


      <p>{sec}:{mili}</p>


      <button onClick={() => setStopwatchStatus('play')}>Start</button>


      <p>{curNum}</p>
      <div onClick={(e) => checkIfAnswerIsCorrect(e)}>
        <button id={curNum}>{curNum}</button>
        <button id='fizz'>Fizz</button>
        <button id='buzz'>Buzz</button>
        <button id='fizzbuzz'>FizzBuzz</button>
      </div>
      {/* <FizzBuzz oi={stopwatchStatus}/> */}
    </>
  )
}

export default App
