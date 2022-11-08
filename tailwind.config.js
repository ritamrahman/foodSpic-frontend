/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lobster: "Sail, cursive, Arial, sans-serif",
        imperial: "Imperial Script, cursive, Arial, sans-serif",
        Handlee: "Handlee, cursive, Arial, sans-serif",
      },
    },
    colors: {
      primary: "#F4E3C9",
      secondary: "#FFF2DD",
      secondaryBG: "#B31706",
      primaryTextColor: "#B31706",
    },
  },
  plugins: [],
};
