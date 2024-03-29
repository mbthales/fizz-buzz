import { React } from 'react'
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const Stopwatch = ({ stopwatchStatus: status, setIsANewRecord }) => {
	const savedRecordTime = localStorage.getItem('recordTime')

	const [sec, setSec] = useState('0')
	const [mili, setMili] = useState('0')
	const [recordTime, setRecordTime] = useState(savedRecordTime || '00:00')

	useEffect(() => stopwatchLogic())

	useEffect(() => {
		saveRecord()
	}, [recordTime])

	const stopwatchLogic = () => {
		if (status === 'start') {
			const timer = setInterval(() => {
				setMili((m) => String(Number(m) + 1))
			}, 10)

			if (mili === '99') {
				setSec((s) => String(Number(s) + 1))
				setMili('0')
			}

			return () => clearInterval(timer)
		} else if (status === 'check') {
			checkRecord()
		}

		setSec('0')
		setMili('0')
	}

	const checkRecord = () => {
		const curRecord = recordTime.split(':')
		const curRecordSec = curRecord[0]
		const curRecordMili = curRecord[1]

		const isFirstAttempt = recordTime === '00:00'
		const isAttemptValid = sec != '0' || mili != '0'
		const isEqualSecMiliSmaller =
			Number(sec) === Number(curRecordSec) &&
			Number(mili) < Number(curRecordMili)
		const isSecSmallerMiliSmaller =
			Number(sec) < Number(curRecordSec) &&
			Number(mili) < Number(curRecordMili)
		const isSecSmallerMiliBigger =
			Number(sec) < Number(curRecordSec) &&
			Number(mili) > Number(curRecordMili)
		const isSecSmaller = Number(sec) < Number(curRecordSec)

		if (isFirstAttempt) {
			updateRecord()
		} else {
			if (isAttemptValid) {
				if (
					isEqualSecMiliSmaller ||
					isSecSmallerMiliSmaller ||
					isSecSmallerMiliBigger ||
					isSecSmaller
				) {
					updateRecord()
				}
			}
		}
	}

	const updateRecord = () => {
		setRecordTime(`${formatCounter(sec)}:${formatCounter(mili)}`)
		setIsANewRecord(true)
	}

	const saveRecord = () => {
		localStorage.setItem('recordTime', recordTime)
	}

	const formatCounter = (secOrMili) => {
		return secOrMili < 10 ? `0${secOrMili}` : secOrMili
	}

	if (status === 'check' || status === 'stop') {
		return (
			<p className="mt-10 text-center font-text text-xl">
				<span className="font-semibold">Record: </span>
				{recordTime}
			</p>
		)
	} else if (status === 'start') {
		return (
			<p className="mt-10 text-center font-text text-xl">
				{formatCounter(sec)}:{formatCounter(mili)}
			</p>
		)
	}
}

Stopwatch.propTypes = {
	stopwatchStatus: PropTypes.string,
	setIsANewRecord: PropTypes.func,
}

export default Stopwatch
