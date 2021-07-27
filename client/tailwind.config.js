module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ["Poppins", "system-ui", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
