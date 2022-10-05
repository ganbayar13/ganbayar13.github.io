/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				github: '#24292F',
				facebook: '#3b5998',
				twitter: '#1da1f2',
			}
		}
	},
	plugins: []
};
