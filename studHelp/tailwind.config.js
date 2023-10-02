/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}',],
  theme: {
    extend: {
      colors: {
        'page-blue' : '#7DC2D9' ,
        'start-bar' : '#58DDEF ',
        'mid-bar' : "#00E0FF ",
        'end-bar' : '#12DAF5',
      }
    },
  },
  plugins: [],
}

