import { React } from "react";

import FizzBuzz from "./Components/FizzBuzz";

const App = () => {
	return (
		<main className="relative max-w-xl mx-auto">
			<h1 className="text-7xl text-center mt-60 mx-12	font-bold font-title">Fizz Buzz Game</h1>
			<FizzBuzz />
		</main>		
	);
};

export default App;
