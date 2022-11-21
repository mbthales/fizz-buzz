import Stopwatch from '../Stopwatch/Stopwatch';

import { useEffect, useState } from 'react'

const FizzBuzz = () => {
  const [stopwatchStatus, setStopwatchStatus] = useState('stop');
  const [curNum, setCurNum] = useState(1);
  const [answer, setAnswer] = useState(curNum.toString());

  useEffect(() => {
    updateCorrectAnswer();
  }, [curNum]);

  const resetGame = () => {
    setCurNum(1);
    setStopwatchStatus('stop');
  };

  // const checkRecord = () => {
  //   const curRecord = record.split(':');
  //   const curRecordSec = curRecord[0];
  //   const curRecordMili = curRecord[1];

  //   if (sec > curRecordSec) {
  //     setRecord(`${sec}:${mili}`);
  //   } else if (sec === curRecordSec && mili > curRecordMili) {
  //     setRecord(`${sec}:${mili}`);
  //   }
  // };

  const checkIfAnswerIsCorrect = (e) => {
    const btnClicked = e.target.id;

    if (btnClicked === answer) {
      setCurNum((num) => num + 1);
    } else {
      //checkRecord();
      resetGame();
    }
  };

  const updateCorrectAnswer = () => {
    if (curNum % 3 === 0) {
      setAnswer('fizz');
    } else if (curNum % 5 === 0) {
      setAnswer('buzz');
    } else if (curNum % 15 === 0) {
      setAnswer('fizzbuzz');
    } else {
      setAnswer(curNum.toString());
    }
  };

  return (
    <div>
      <Stopwatch status={stopwatchStatus}/>

      {
        stopwatchStatus === "start" ?
        <div>
          <p>{curNum}</p>
          <div onClick={(e) => checkIfAnswerIsCorrect(e)}>
            <button type="button" id={curNum}>{curNum}</button>
            <button type="button" id="fizz">Fizz</button>
            <button type="button" id="buzz">Buzz</button>
            <button type="button" id="fizzbuzz">FizzBuzz</button>
          </div>
        </div>:
        <button onClick={() => setStopwatchStatus('start')}>Start Game</button>
      }
      
    </div>
  )
}

export default FizzBuzz
