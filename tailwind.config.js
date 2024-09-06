/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'app-blue': '#1E40AF', // Add your custom color here
      },
    },
  },
  plugins: [],
}

