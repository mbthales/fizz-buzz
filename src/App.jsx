import { React } from "react";

import FizzBuzz from "./Components/FizzBuzz";

const App = () => {
	return (
		<main className="relative">
			<h1 className="text-6xl text-center font-title">Fizz Buzz Game</h1>
			<FizzBuzz />
		</main>		
	);
};

export default App;
