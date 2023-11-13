/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js}'],
	theme: {
		container: {
			center: true,
		},
		extend: {
			fontFamily: {
				sans: 'Poppins',
			},
		},
	},
	plugins: [],
}
