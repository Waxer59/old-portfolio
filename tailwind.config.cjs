/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: {
			primary: "var(--principal-color)",
			secondary: "var(--secondary-color)",
			gray: "var(--gray)",
			hover: "var(--hover)",
			border: "var(--border)"
		}
	},
	plugins: [],
}
