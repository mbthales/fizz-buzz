/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.jsx'],
	theme: {
		extend: {
			fontFamily: {
				title: ['Libre Franklin', 'sans-serif'],
				text: ['Mulish', 'sans-serif'],
			},
			colors: {
				primary: '#FFFBEB',
				'primary-600': '#F0EDE3',
				secundary: '#222222',
				accent: '#2B3467',
			},
			spacing: {
				'negative-3rem': '-3rem',
				'20%': '20%',
			},
		},
	},
	plugins: [],
}
