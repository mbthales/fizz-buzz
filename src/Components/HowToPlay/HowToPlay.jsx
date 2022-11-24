import { React } from "react";
import { useState } from "react";

const HowToPlay = () => {
	const [helpAvailable, setHelpAvailable] = useState(false);

	const helpMessage = () => {
		return (
			<p>Se o número for múltiplo de 3, aperte o botão Fizz. Se o botão for múltiplo de 5,aperte o botão Buzz. Se ele for múltiplo de 15, aperte o botão FizzBuzz.</p>
		);
	};

	return (
		<>
			{
				helpAvailable && 
        helpMessage()
			}

			<button type="button" onClick={() => setHelpAvailable(true)}>?</button>
		</>
	);
};

export default HowToPlay;