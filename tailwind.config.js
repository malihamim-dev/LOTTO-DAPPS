/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern: /text-\[clamp\(.*\)\]/, // allows dynamic clamp classes
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
