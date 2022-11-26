import { React } from "react";
import { useState } from "react";

const HowToPlay = () => {
	const [helpAvailable, setHelpAvailable] = useState(false);

	const helpMessage = () => {
		return (
			<div className="text-center text-xl absolute bg-zinc-600 top-1/4 h-60 flex items-center">
				<p>Se o número for múltiplo de 3, aperte o botão Fizz. Se o botão for múltiplo de 5, aperte o botão Buzz. Se ele for múltiplo de 15, aperte o botão FizzBuzz.
				</p>
			</div>
		);
	};

	return (
		<>
			{
				helpAvailable && 
        helpMessage()
			}

			<button className="absolute top-2 right-4" type="button" onClick={() => setHelpAvailable(!helpAvailable)}>?</button>
		</>
	);
};

export default HowToPlay;