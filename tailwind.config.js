module.exports = {
  content: ["./*.html", "./pages/*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        colorFirst: "#F2CEDA",
        colorSecond: "#D23166",
        colorThird: "#0F0101",
        colorFourth: "#150101",
        colorFifth: "#fafafa",
      },
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
  },
  plugins: [],
};
