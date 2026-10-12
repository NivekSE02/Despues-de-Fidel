module.exports = {
  content: ['./src/**/*.{astro,tsx,ts,jsx,js}'],
  darkMode: 'class', // allow manual dark mode if needed
  theme: {
    extend: {
      colors: {
        primary: '#ffffff', // white
        accent: '#D4AF37', // golden (sorado)
        wine: '#7B1123', // red vino
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
