/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0px 32px 64px -12px rgba(16, 24, 40, 0.14)',
        '2xl': '0px 24px 48px -12px rgba(16, 24, 40, 0.18)',
        'xm' :'0px 1px 2px rgba(16, 24, 40, 0.1)',
        'sm' : '0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(16, 24, 40, 0.1)'
      }
    },
  },
  plugins: [],
}
