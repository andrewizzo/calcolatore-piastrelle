/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      boxShadow:{
        '3xl':'0px 4px 20px 10px rgba(0, 0, 0, 0.25)'
      }
    },
  },
  plugins: [],
}

