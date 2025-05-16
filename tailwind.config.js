/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0ea5e9", // sky-500
        secondary: "#6366f1", // indigo-500
        dark: "#1e293b", // slate-800
      },
    },
  },
  plugins: [],
}
