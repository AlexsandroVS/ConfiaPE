/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#007BFF', // Ensure primary-blue is defined or adjust as needed
      },
      boxShadow: {
        'primary-blue-glow': '0 0 10px rgba(0, 123, 255, 0.7)', // Neon glow effect
      },
      textShadow: {
        'primary-blue-glow': '0 0 8px rgba(0, 123, 255, 0.8)', // Text glow effect
      },
      dropShadow: {
        'primary-blue-glow': '0 0 8px rgba(0, 123, 255, 0.8)', // Drop shadow for icons
      },
      keyframes: {
        'grid-pattern-move': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '60px 60px' }, // Assuming 60px is the size of the grid cells
        },
      },
      animation: {
        'grid-pattern': 'grid-pattern-move 60s linear infinite',
      },
    },
  },
  plugins: [],
}