/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          amber: '#F2B52B',
          dark: '#060D1A',
          navy: '#061123',
          emerald: '#00BC7C',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to right, rgba(6,13,26,0.95) 0%, rgba(6,17,35,0.7) 100%)',
      }
    },
  },
  plugins: [],
}
