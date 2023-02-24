/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["var(--font-poppins)"],
    },
    extend: {
      backgroundImage: {
        lpbg: "url('/lpbackground.png')",
        lpbg2: "url('/lpbg2.png')",
        // "login-2": "url('/loginbg2.jpg')",
      },
      colors: {
        cgray: "#E7E2E2",
      },
    },
  },
  plugins: [],
};
