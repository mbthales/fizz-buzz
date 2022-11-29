import { React } from "react";
import { useEffect, useState } from "react";

import Stopwatch from "../Stopwatch/Stopwatch";
import HowToPlay from "../HowToPlay/HowToPlay";

const FizzBuzz = () => {
	const [stopwatchStatus, setStopwatchStatus] = useState("stop");
	const [curNum, setCurNum] = useState(1);
	const [answer, setAnswer] = useState(curNum.toString());

	useEffect(() => {
		updateCorrectAnswer();
		endGame();
	}, [curNum]);

	const resetGame = (status) => {
		setStopwatchStatus(status);
		setCurNum(1);
	};

	const endGame = () => {
		if(curNum === 6){
			resetGame("check");
		}
	};

	const checkIfAnswerIsCorrect = (e) => {
		const btnClicked = e.target.id;

		if (btnClicked === answer) {
			setCurNum((num) => num + 1);
		} else {
			resetGame("stop");
		}
	};

	const updateCorrectAnswer = () => {
		if (curNum % 3 === 0) {
			setAnswer("fizz");
		} else if (curNum % 5 === 0) {
			setAnswer("buzz");
		} else if (curNum % 15 === 0) {
			setAnswer("fizzbuzz");
		} else {
			setAnswer(curNum.toString());
		}
	};

	return (
		<div>
			<Stopwatch status={stopwatchStatus} curNum={curNum}/>

			{
				stopwatchStatus === "start" ?
					<div>
						<p className="mt-4 font-text text-2xl font-medium text-center">{curNum}</p>
						<div className="flex flex-wrap justify-center gap-3 mt-6 max-w-xl mx-auto" onClick={(e) => checkIfAnswerIsCorrect(e)}>
							<button type="button" className="py-4 px-6 rounded font-text bg-zinc-500 text-xl w-32" id={curNum}>{curNum}</button>
							<button type="button" className="py-4 px-6 rounded font-text bg-zinc-500 text-xl w-32" id="fizz">Fizz</button>
							<button type="button" className="py-4 px-6 rounded font-text bg-zinc-500 text-xl w-32" id="buzz">Buzz</button>
							<button type="button" className="py-4 px-6 rounded font-text bg-zinc-500 text-xl w-32" id="fizzbuzz">FizzBuzz</button>
						</div>
					</div>
					:
					<>					
						<button type="button" className="py-4 px-6 my-12 w-32 mx-auto block rounded font-text bg-zinc-500 text-xl" onClick={() => setStopwatchStatus("start")}>Start</button>
						<HowToPlay />
					</>
			}

      
		</div>
	);
};

export default FizzBuzz;
