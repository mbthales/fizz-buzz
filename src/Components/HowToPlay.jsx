import { React } from "react";
import { useState } from "react";
import { motion, AnimatePresence, easeIn } from "framer-motion";

const HowToPlayText = () => {
	return(
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
			transition={{ease: easeIn, duration: 0.1}} className="text-center text-lg absolute bg-accent text-primary-600 h-96 w-full p-10 flex flex-col justify-center center-vertically rounded">
			<h2 className="text-3xl font-semibold">Como jogar</h2>
			<ul className="my-8">
				<li>Número divisível por 3: <span className="font-bold">Fizz</span></li>
				<li>Número divisível por 5: <span className="font-bold">Buzz</span></li>
				<li>Número divisível por 15: <span className="font-bold">FizzBuzz</span></li>
			</ul>
			<p>O número máximo é 20.</p>
		</motion.div>
	);
};


const HowToPlay = () => {
	const [helpAvailable, setHelpAvailable] = useState(false);

	return (
		<>
			<AnimatePresence>
				{ helpAvailable && <HowToPlayText /> }
			</AnimatePresence>
			<motion.button whileHover={{ scale: 1.5 }} whileTap={{ rotate: 360 }}
				className="absolute top-negative-3rem right-4 text-xl font-bold text-accent" type="button" onClick={() => setHelpAvailable(!helpAvailable)}>
				?
			</motion.button>
		</>
	);
};

export default HowToPlay;