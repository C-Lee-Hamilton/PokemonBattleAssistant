/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/src/images/bg.png')",
      },
      fontFamily: {
        KM: ["KodeMono", "monospace"],
      },
      colors: {
        1: "#aaaa99",
        2: "#ff4422",
        3: "#3399ff",
        4: "#ffcc33",
        5: "#6bb84d",
        6: "#66ccff",
        7: "#bb5544",
        8: "#aa5599",
        9: "#ddbb55",
        10: "#8899ff",
        11: "#ff5599",
        12: "#aabb22",
        13: "#bbaa66",
        14: "#6666bb",
        15: "#7766ee",
        16: "#775544",
        17: "#aaaabb",
        18: "#ee99ee",
        19: "#000000",
        white: "#ffffff",
      },
      boxShadow: {
        custom: "0 4px 6px 0 rgba(0, 0, 0, 0.5)",
        dark: "1px 1px 2px rgba(0, 0, 0,0.1)",
      },
      textShadow: {
        default: "2.5px 2.5px 3.5px rgba(146, 125, 94, 0.6)", // A simple shadow with 50% opacity
        dark: "1px 1px 2px rgba(0, 0, 0,0.8)",
      },
      screens: {
        sm: "300px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const newUtilities = {};
      Object.entries(theme("textShadow")).forEach(([name, value]) => {
        newUtilities[`.text-shadow-${name}`] = {
          textShadow: value,
        };
      });
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
