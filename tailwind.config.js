/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: '480px',
      md: '634px',
      lg: '976px',
      tb: '1014px',
      ft: '1311px',
      xl: "1440px",
    },
  },
  plugins: [],
}
