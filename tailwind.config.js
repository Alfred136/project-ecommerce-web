/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/features/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0C243C',
        secondary: '#7E8C9C',
        tiara: '#C9D1D5'
      },
      fontFamily: {
        opens: ['Open+Sans', 'sans-serif'],
        logo: ['Zeyada', 'Covered By Your Grace', 'sans-serif'],
      },
      screens: {
        xs: '480px',
        ss: '620px',
        sm: '768px',
        md: '1060px',
        lg: '1200px',
        xl: '1440px',
        xxl: '1700px',
      },
    },
  },
  plugins: [],
}
