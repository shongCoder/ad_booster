/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        adb_purple: "#00217B",
        abd_purple_hover: "#001650",
        adb_menu: "#666666",
        adb_text: "#898D99",
        adb_black: "#1A202F",
        adb_gray: "#F1F1F1",
        adb_light_gray: "#FAFBFF",
        adb_sodomy: "#2E3C52",
        adb_blue: "#1956FE",
        abd_blue_hover: "#003adc",
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
