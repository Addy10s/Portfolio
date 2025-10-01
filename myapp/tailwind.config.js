export const content = ['./src/**/*.{html,js,svelte,ts}'];
export const theme = {
	extend: {}
};
export const plugins = [
	require('@tailwindcss/forms'),
	require('@tailwindcss/typography'),
	require('@tailwindcss/line-clamp')
];
