/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				// background
				lightBg: '#FAFAFA',
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


				elevatedNavyBlue: '#1a1f35',
				// subtleGold: '#e1c48126',
				// subtleGold: '#e1c48140',
				subtleGold: '#e1c48166',
				subtleNavy: '#11152699',

				themeGold: '#e7c978',
				themeNavy: '#24304f',
				pageBg: '#f5f5f4',
				cardBg: '#ffffff',
				mutedGray: '#64748b',
				brdrprime: '#d8dde6',

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
