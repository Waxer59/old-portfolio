/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      width: {
        responsivePhoto: 'clamp(75px, 50%, 600px)'
      },
      keyframes: {
        float: {
          '0%': {
            transform: 'translatey(0px)',
            boxShadow: '0 5px 15px 0px rgba(0, 0, 0, 0.6)'
          },
          '50%': {
            boxShadow: '0 25px 15px 0px rgba(0, 0, 0, 0.2)',
            transform: 'translatey(-20px)'
          },
          '100%': {
            boxShadow: '0 5px 15px 0px rgba(0, 0, 0, 0.6)',
            transform: 'translatey(0px)'
          }
        }
      },
      animation: {
        floating: 'float 6s ease-in-out infinite'
      }
    },
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
