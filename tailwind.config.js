/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        adb_purple: "#00217B",
        adb_menu: "#666666",
        adb_text: "#7D8A9F",
        adb_black: "#1C1F33",
        adb_gray: "#F1F1F1",
        adb_light_gray: "#F7F7F7",
        adb_sodomy: "#2E3C52",
        adb_blue: "#1956FE",
        adb_white: "#FFFFFF",
      },
      fontFamily: {
        sans: ["Pretendard", "sans-serif"],
        play: ['"Play"', 'sans-serif']
      },
      screens: {
        md: "640px",
        lg: "1440px",
      },
    },
  },
  plugins: [],
};
