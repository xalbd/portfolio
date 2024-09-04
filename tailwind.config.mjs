/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				theme: {
					light: "#e3dede",
					dark: "#2c103f"
				},
				special: {
					50: "#e8e8e8",
					100: "#eeeeee",
					200: "#f6f6f6",
					300: "#fafafa",
					400: "#f7f7f7",
					500: "#ece8e8",
					600: "#d6bfc2",
					700: "#b88c98",
					800: "#935a72",
					900: "#6a2e54",
				},
			},
		},
	},
	plugins: [],
}
