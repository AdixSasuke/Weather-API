/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Nunito:['sans-serif']
      },
      fontFamily:{
        sg:['sans-serif']
      },
      fontFamily:{
        poppins:['sans-serif']
      },
      fontFamily:{
        Raleway:['sans-serif']
      }
    },
  },
  plugins: [],
}