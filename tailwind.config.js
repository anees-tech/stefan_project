/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      xs: '353px',
      sm: '550px',
      md: '775px',
      lg: '976px',
      tb: '1054px',
      ft: '1282px',
      xl: "1440px",
      xxl: "1640px",
    },
  },
  plugins: [],
}
