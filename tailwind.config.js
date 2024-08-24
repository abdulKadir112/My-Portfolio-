/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Open Sans', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'kadir': "url('/public/myPic/kadir.jpg')",
        'kadir2': "url('/public/myPic/kadir2.png')",
      },
      dropShadow: {
        'clip-path': 'polygon(0 0, 100% 0, 40% 10%, 14% 100%)',
      },
    },
  },
  plugins: [],
}