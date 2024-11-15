const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          0: "#000000",
          1: "#5439AC",
          2: "#F4F4FA",
          3: "#FFFFFF",
        },
        darkPrimary: {
          0: "#FFFFFF",
          1: "#57C5D0",
          2: "#303030",
          3: "#202020",
        },
        neutral: {
          0: "#56596A",
          1: "#D6D6D6",
          2: "#F4F4FA",
        },
        success: {
          0: "#39AC65",
          1: "#DEF1F6",
        },
        error: {
          0: "#E54660",
          1: "#F6DEE5",
        },
      },
    },
    fontFamily: {
      sans: ["IranSans", "sans-serif"],
    },
  },
  plugins: [],
});
