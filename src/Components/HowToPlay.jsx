import { React } from "react";
import { useState } from "react";

const HowToPlay = () => {
	const [helpAvailable, setHelpAvailable] = useState(false);

	return (
		<>
			{(() =>{
				if(helpAvailable){
					return (						
						<div className="text-center text-xl absolute bg-accent text-primary-600 top-20% h-64 p-10 flex items-center">
							<p>Se o número for múltiplo de 3, aperte o botão Fizz. Se o botão for múltiplo de 5, aperte o botão Buzz. Se ele for múltiplo de 15, aperte o botão FizzBuzz.
							</p>
						</div>
					);
				}
			})()}
			<button className="absolute top-negative-3rem right-4 text-xl font-bold text-accent" type="button" onClick={() => setHelpAvailable(!helpAvailable)}>?</button>
		</>
	);
};

export default HowToPlay;