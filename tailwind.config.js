/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "769px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      brightRed: `red`,
      brightRedLight: `hsl(12,88%,69%) `,
      brightRedSupLight: `hsl(228,39%,95%) `,
      brightBlue: `hsl(228,39%,23%)`,
      darkGrayishBlue: `hsl(228,39%,23%)`,
      veryDarkBlue: `hsl(223,12%,13%)`,
      veryDarkPale: `hsl(13,100%,96%)`,
      veryLightGray: `hsl(0,0%,98%)`,
    },
  },
  plugins: [],
};
