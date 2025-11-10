/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#6B4EFF',
        gradientStart: '#C7D2FE',
        gradientEnd: '#E0EAFC'
      }
    }
  },
  plugins: []
}