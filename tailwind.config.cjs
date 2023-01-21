const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "cust-p-Soft-blue": "hsl(215, 51%, 70%)",
        "cust-p-Cyan": "hsl(178, 100%, 50%)",
        "cust-n-main-BG": "hsl(217, 54%, 11%)",
        "cust-n-card-BG": "hsl(216, 50%, 16%)",
        "cust-n-line": "hsl(215, 32%, 27%)",
        "cust-n-White": "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        Outfit: ['"Outfit"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
