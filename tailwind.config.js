/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-dark": "#191919",
        "custom-dark-gray": "#262626",
        "custom-dark-blue": "#03122F",
      },
    },
  },
  plugins: [],
};
