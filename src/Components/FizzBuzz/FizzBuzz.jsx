import { useEffect, useState } from 'react'

function FizzBuzz() {
  const [curNum, setCurNum] = useState(1);
  const [answer, setAnswer] = useState(curNum.toString());

  useEffect(() =>{
    if(curNum % 3 === 0){
      setAnswer('fizz')
    } else if(curNum % 5 === 0){
      setAnswer('buzz')
    } else if(curNum % 15 === 0){
      setAnswer('fizzbuzz')
    } else {
      setAnswer(curNum.toString())
    }

  }, [curNum])

  const test = (e) => {
    const oi = e.target.id
    if(oi === answer){
      setCurNum(num => num + 1)
    } else{
      setCurNum(1)
    }
  }

  return (
    <>
      <p>{curNum}</p>
      <div onClick={(e) => test(e)}>
        <button id={curNum}>{curNum}</button>
        <button id='fizz'>Fizz</button>
        <button id='buzz'>Buzz</button>
        <button id='fizzbuzz'>FizzBuzz</button>
      </div>
    </>
  )
}

export default FizzBuzz
