/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#121212',           // Background: charcoal black
        'primary-text': '#E0E0E0',      // Primary Text: light gray
        'secondary-text': '#B0B0B0',    // Secondary Text: medium gray
        'border': '#444444',            // Borders/Dividers: dark gray
        'accent': '#888888',            // Accent: soft gray
      },
    },
  },
  plugins: [],
}

