/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx}"];
export const mode = "jit";
export const theme = {
  extend: {
    colors: {
      primary: "#050816",
      secondary: "#c2c0d8",
      tertiary: "#151030",
      "black-100": "#100d25",
      "black-200": "#090325",
      "white-100": "#f3f3f3",
    },
    boxShadow: {
      card: "0px 35px 120px -15px #211e35",
    },
    screens: {
      xs: "450px",
    },
    backgroundImage: {
      "hero-pattern": "url('/src/assets/herobgc.jpg')",
      "about-pattern": "url('/src/assets/about.jpg')",
    },

    fontFamily: {
      sans: ["nunito", "sans-serif"],
      serif: ["Georgia", "Cambria", "Times New Roman", "sans-serif"],
      mono: [
        "Menlo",
        "Monaco",
        "Times New Roman",
        "Liberation Mono",
        "Courier New",
        "sans-serif",
      ],
      pixel: ["Press Start 2P", "sans-serif"],
    },
  },
};
export const plugins = [];
