/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {},
  },
  plugins: [ require('flowbite/plugin'),require("daisyui")],
}

