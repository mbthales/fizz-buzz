import { useEffect, useState } from 'react'

const Stopwatch = ({ status }) => {
  const [sec, setSec] = useState(0);
  const [mili, setMili] = useState(0);

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
      setSec(0);
      setMili(0);
    }
  };

  return (
    <div>
      <p>
        {sec}
        :
        {mili}
      </p>
    </div>
  )
}

export default Stopwatch
