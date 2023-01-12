import { React } from "react";
import { useState } from "react";

const HowToPlay = () => {
	const [helpAvailable, setHelpAvailable] = useState(false);

	return (
		<>
			{(() =>{
				if(helpAvailable){
					return (						
						<div className="text-center text-lg absolute bg-accent text-primary-600 h-96 w-full p-10 flex flex-col justify-center center-vertically rounded">
							<h2 className="text-3xl font-semibold">Como jogar</h2>
							<ul className="my-8">
								<li>Número múltiplo de 3: <span className="font-bold">Fizz</span></li>
								<li>Número múltiplo de 5: <span className="font-bold">Buzz</span></li>
								<li>Número múltiplo de 15: <span className="font-bold">FizzBuzz</span></li>
							</ul>
							<p>O número máximo é 20.</p>
						</div>
					);
				}
			})()}
			<button className="absolute top-negative-3rem right-4 text-xl font-bold text-accent" type="button" onClick={() => setHelpAvailable(!helpAvailable)}>?</button>
		</>
	);
};

export default HowToPlay;