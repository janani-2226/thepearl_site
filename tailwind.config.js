/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: "#142447", deep: "#0E1730", ink: "#0B1222" },
        gold: { DEFAULT: "#C4891A", light: "#D9A441", dark: "#9E6D12" },
        mist: "#F2F3F5",
        brand: {
          beehive: "#D49A1C",
          punch: "#4A2F86",
          smart3: "#7B3FA0",
          abacus: "#17795C",
          shyamraj: "#C0392B",
        },
      },
      fontFamily: {
        serif: ['"Fraunces"', "Georgia", "serif"],
        sans: ['"Karla"', "system-ui", "sans-serif"],
      },
      maxWidth: { site: "1120px" },
    },
  },
  plugins: [],
};
