import { React } from "react";

import FizzBuzz from "./Components/FizzBuzz/FizzBuzz";
import HowToPlay from "./Components/HowToPlay/HowToPlay";

const App = () => {
	return (
		<main>
			<h1 className="text-7xl text-center mt-60 mx-12	font-bold font-title">Fizz Buzz Game</h1>
			<FizzBuzz />
			<HowToPlay />
		</main>		
	);
};

export default App;
