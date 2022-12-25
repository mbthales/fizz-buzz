import { React } from "react";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import Stopwatch from "./Stopwatch";
import HowToPlay from "./HowToPlay";

const CurNumAndAnswers = ({ answer, setCurNum, resetGame, curNum }) => {
	const checkIfAnswerIsCorrect = (event) => {
		const answerClicked = event.target.id;

		if(answerClicked === answer){
			setCurNum((num) => num + 1);
		} else{
			resetGame("wrong");
		}
	};

	return (
		<div>
			<p className="mt-4 font-text text-2xl font-medium text-center">{curNum}</p>
			<div className="flex flex-wrap justify-center gap-3 mt-6 max-w-xl mx-auto" onClick={(e) => checkIfAnswerIsCorrect(e)}>
				<button type="button" className="py-4 px-6 rounded font-text bg-zinc-500 text-xl w-32" id={curNum}>{curNum}</button>
				<button type="button" className="py-4 px-6 rounded font-text bg-zinc-500 text-xl w-32" id="fizz">Fizz</button>
				<button type="button" className="py-4 px-6 rounded font-text bg-zinc-500 text-xl w-32" id="buzz">Buzz</button>
				<button type="button" className="py-4 px-6 rounded font-text bg-zinc-500 text-xl w-32" id="fizzbuzz">FizzBuzz</button>
			</div>
		</div>
	);
};

const RestartStartButton = ({ setStopwatchStatus, btnName }) => {
	return(
		<button type="button" className="py-4 px-6 my-12 w-32 mx-auto block rounded font-text bg-zinc-500 text-xl" onClick={() => setStopwatchStatus("start")}>{btnName}</button>
	);
};

const FizzBuzz = () => {
	const [stopwatchStatus, setStopwatchStatus] = useState("stop");
	const [curNum, setCurNum] = useState(1);
	const [answer, setAnswer] = useState(curNum.toString());
	const [isANewRecord, setIsANewRecord] = useState(false);

	useEffect(() => {
		updateCorrectAnswer();
		checkIfGameEnded();
	}, [curNum]);

	const resetGame = (status) => {
		setStopwatchStatus(status);
		setIsANewRecord(false);
		setCurNum(1);
	};

	const checkIfGameEnded = () => {
		curNum === 6 && resetGame("check");
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
			<Stopwatch {...{stopwatchStatus, setIsANewRecord}} />
			<HowToPlay />
			{(() => {
				switch(stopwatchStatus){
				case "start": return (
					<CurNumAndAnswers {...{answer, setCurNum, resetGame, curNum}} />
				);
				case "stop": return (
					<RestartStartButton 
						{...{setStopwatchStatus}} 
						btnName={"Start"} 
					/>
				);
				case "wrong": return (
					<>
						<p>You failed!</p>
						<RestartStartButton 
							{...{setStopwatchStatus}} 
							btnName={"Restart"} 
						/>
					</>
				);
				case "check": return (
					<>
						{isANewRecord ? 
							<p>New Record!</p>
							: <p>You didnt beat your record. Try again!</p>
						}
						<RestartStartButton 
							{...{setStopwatchStatus}} 
							btnName={"Restart"} 
						/>
					</>
				);
				}
			})()}
		</div>
	);
};

CurNumAndAnswers.propTypes = {
	answer: PropTypes.string,
	resetGame: PropTypes.func,
	setCurNum: PropTypes.func,
	curNum: PropTypes.number
};

RestartStartButton.propTypes = {
	setStopwatchStatus: PropTypes.func,
	btnName: PropTypes.string
};

export default FizzBuzz;
