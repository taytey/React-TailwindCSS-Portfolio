/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        JosefinRegular: "JosefinRegular",
        JosefinItalic: "JosefinItalic",
        JosefinLight: "JosefinLight",
        Dafoe: "Dafoe",
      }
    },
  },
  plugins: [],
}