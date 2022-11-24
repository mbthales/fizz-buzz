import { useEffect, useState } from 'react'

const Stopwatch = ({ status }) => {
  const [sec, setSec] = useState(0);
  const [mili, setMili] = useState(0);
  const [record, setRecord] = useState('0:0');

  useEffect(() => stopwatchLogic());

  const stopwatchLogic = () => {
    if (status === 'start') {
      const timer = setInterval(() => {
        setMili((m) => m + 1);
      }, 10);

      if (mili === 99) {
        setSec((s) => s + 1);
        setMili(0);
      }

      return () => clearInterval(timer);
    } else if (status === "stop") {
      checkRecord();
    }
  };

  const checkRecord = () => {
    const curRecord = record.split(':');
    const curRecordSec = Number(curRecord[0]);
    const curRecordMili = Number(curRecord[1]);

    const conditionOne = sec > curRecordSec && mili > curRecordMili;
    const conditionTwo = sec === curRecordSec && mili > curRecordMili;
    const conditionThree = sec > curRecordSec && mili === curRecordMili;
    const conditionFour = sec > curRecordSec && mili < curRecordMili;

    if (conditionOne || conditionTwo || conditionThree || conditionFour) {
      setRecord(`${sec}:${mili}`);
    }

    setSec(0);
    setMili(0);
  };

  return (
    <div>
      {record}
      <p>
        {sec}
        :
        {mili}
      </p>
    </div>
  )
}

export default Stopwatch
