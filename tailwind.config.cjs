/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
    colors: {
      primaryColor: 'var(--primary-color)',
      secondaryColor: 'var(--secondary-color)',
      grayColor: 'var(--gray-color)',
      hoverColor: 'var(--hover-color)',
      borderColor: 'var(--border-color)'
    }
  },
  plugins: []
}
