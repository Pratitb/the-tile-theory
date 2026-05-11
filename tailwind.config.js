/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				// background
				// lightBg: '#FAFAFA',
				lightBg: '#F5F5F5',
				darkBg: '#0A0A0A',

				// card
				card: '#FFFFFF',
				darkCard: '#181818',

				//text
				primaryText: '#000000', // weight: 600
				secondaryText: '#999999', // weight: 400

				// button
				buttonBg: '#000000',
				buttonText: '#FFFFFF', // weight regular 400
			},
			fontFamily: {
				brand: ['Google Sans', 'sans-serif'],
			},
			backgroundImage: {
				'banner': "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.2)), url('/banner-2.jpeg')",
			}
		},
	},
	plugins: [],
};
