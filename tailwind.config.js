/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        headline: "#FFFFFE",
        paragraph: "#ABD1C6",
        btnPrimary: "#F9BC60",
        btnSecondary: "#001E1D",
        background: "#004643",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
