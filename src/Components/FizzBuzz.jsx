import { React } from 'react'
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

import Stopwatch from './Stopwatch'
import HowToPlay from './HowToPlay'

const CurNumAndAnswers = ({ answer, setCurNum, resetGame, curNum }) => {
	const checkIfAnswerIsCorrect = (event) => {
		const answerClicked = event.target.id

		if (answerClicked === answer) {
			setCurNum((num) => num + 1)
		} else {
			resetGame('wrong')
		}
	}

	return (
		<div>
			<motion.p className="mt-4 text-center font-text text-2xl font-medium">
				{curNum}
			</motion.p>
			<div
				className="mx-auto mt-6 flex max-w-xl flex-wrap justify-center gap-3"
				onClick={(e) => checkIfAnswerIsCorrect(e)}
			>
				<motion.button
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					type="button"
					className="w-32 rounded bg-accent py-4 px-6 font-text text-xl text-primary-600"
					id={curNum}
				>
					{curNum}
				</motion.button>
				<motion.button
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					type="button"
					className="w-32 rounded bg-accent py-4 px-6 font-text text-xl text-primary-600"
					id="fizz"
				>
					Fizz
				</motion.button>
				<motion.button
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					type="button"
					className="w-32 rounded bg-accent py-4 px-6 font-text text-xl text-primary-600"
					id="buzz"
				>
					Buzz
				</motion.button>
				<motion.button
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					type="button"
					className="w-32 rounded bg-accent py-4 px-6 font-text text-xl text-primary-600"
					id="fizzbuzz"
				>
					FizzBuzz
				</motion.button>
			</div>
		</div>
	)
}

const RestartStartButton = ({ setStopwatchStatus, btnName }) => {
	return (
		<motion.button
			whileHover={{ scale: 1.1 }}
			type="button"
			className="my-12 mx-auto block w-32 rounded bg-accent py-4 px-6 font-text text-xl text-primary-600"
			onClick={() => setStopwatchStatus('start')}
		>
			{btnName}
		</motion.button>
	)
}

const FizzBuzz = () => {
	const [stopwatchStatus, setStopwatchStatus] = useState('stop')
	const [curNum, setCurNum] = useState(1)
	const [answer, setAnswer] = useState(curNum.toString())
	const [isANewRecord, setIsANewRecord] = useState(false)

	useEffect(() => {
		updateCorrectAnswer()
		checkIfGameEnded()
	}, [curNum])

	const resetGame = (status) => {
		setStopwatchStatus(status)
		setIsANewRecord(false)
		setCurNum(1)
	}

	const checkIfGameEnded = () => {
		curNum === 21 && resetGame('check')
	}

	const updateCorrectAnswer = () => {
		if (curNum % 15 === 0) {
			setAnswer('fizzbuzz')
		} else if (curNum % 3 === 0) {
			setAnswer('fizz')
		} else if (curNum % 5 === 0) {
			setAnswer('buzz')
		} else {
			setAnswer(curNum.toString())
		}
	}

	return (
		<div>
			<Stopwatch {...{ stopwatchStatus, setIsANewRecord }} />
			<HowToPlay />
			{(() => {
				switch (stopwatchStatus) {
					case 'start':
						return (
							<CurNumAndAnswers
								{...{ answer, setCurNum, resetGame, curNum }}
							/>
						)
					case 'stop':
						return (
							<RestartStartButton
								{...{ setStopwatchStatus }}
								btnName={'Start'}
							/>
						)
					case 'wrong':
						return (
							<>
								<p className="mt-10 text-center font-text text-xl">
									You failed. Try again!
								</p>
								<RestartStartButton
									{...{ setStopwatchStatus }}
									btnName={'Restart'}
								/>
							</>
						)
					case 'check':
						return (
							<>
								{isANewRecord ? (
									<p className="mt-10 text-center font-text text-xl">
										New Record. Congratulations!
									</p>
								) : (
									<p className="mt-10 text-center font-text text-xl">
										You didn&#39;t beat your record. Try again!
									</p>
								)}
								<RestartStartButton
									{...{ setStopwatchStatus }}
									btnName={'Restart'}
								/>
							</>
						)
				}
			})()}
		</div>
	)
}

CurNumAndAnswers.propTypes = {
	answer: PropTypes.string,
	resetGame: PropTypes.func,
	setCurNum: PropTypes.func,
	curNum: PropTypes.number,
}

RestartStartButton.propTypes = {
	setStopwatchStatus: PropTypes.func,
	btnName: PropTypes.string,
}

export default FizzBuzz
