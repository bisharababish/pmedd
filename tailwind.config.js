/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#1e40af',
        'secondary-blue': '#3b82f6',
        'light-blue': '#dbeafe',
        'very-light-blue': '#f0f9ff',
        'primary-red': '#dc2626',
        'light-red': '#fee2e2',
        'dark-red': '#991b1b',
        'main-gray': '#1f2937', // for text
        'light-gray': '#e5e7eb', // for footer text, secondary buttons
        'border-gray': '#e2e8f0', // for card borders
        'footer-link-blue': '#93c5fd', // for footer links
        'card-bg': '#f8fafc', // very light gray-blue for cards/sections
        'white': '#ffffff',
      },
    },
  },
  plugins: [],
};
