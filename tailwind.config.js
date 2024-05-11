/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "red-500": "#3cb371",
        "bg-hero": "#E2AC4B"
      },
    },
  },
  plugins: [],
};
