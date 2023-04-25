/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'lpn-black': '#121212',
        'lpn-dark-blue': '#062237',
        'lpn-gray-heading': '#D9D9D9',
        'lpn-white': '#FFFFFF',
        'lpn-gray-text': '#666666',
        'lpn-gray-line': '#E8E8E8',
        'lpn-dark-text': '#606060',
      },
      animation: {
        'scroll': 'scroll 40s linear infinite',
      }
    },
  },
  plugins: []
}
