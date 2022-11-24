import { React } from "react";

import FizzBuzz from "./Components/FizzBuzz/FizzBuzz";
import HowToPlay from "./Components/HowToPlay/HowToPlay";

const App = () => {
	return (
		<>
			<h1>Fizz Buzz Game</h1>
			<FizzBuzz />
			<HowToPlay />
		</>
	);
};

export default App;
