import { React } from "react";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Stopwatch = ({ status }) => {
	const [sec, setSec] = useState(0);
	const [mili, setMili] = useState(0);
	const [record, setRecord] = useState("0:0");

	useEffect(() => stopwatchLogic());

	const stopwatchLogic = () => {
		if (status === "start") {
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
		const curRecord = record.split(":");
		const curRecordSec = Number(curRecord[0]);
		const curRecordMili = Number(curRecord[1]);

		const conditionOne = sec > curRecordSec && mili > curRecordMili;
		const conditionTwo = sec === curRecordSec && mili > curRecordMili;
		const conditionThree = sec > curRecordSec && mili === curRecordMili;
		const conditionFour = sec > curRecordSec && mili < curRecordMili;

		if (conditionOne || conditionTwo || 
      conditionThree || conditionFour) {
			setRecord(`${sec}:${mili}`);
		}

		setSec(0);
		setMili(0);
	};

	return (
		<div>
			<p className="mt-10 text-xl text-center font-text">
				<span className="font-semibold">Record: </span>{record}
			</p>
			<p>
				{sec}
        :
				{mili}
			</p>
		</div>
	);
};

Stopwatch.propTypes = {
	status: PropTypes.string
};

export default Stopwatch;
