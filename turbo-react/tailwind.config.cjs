/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '968px',
      xl: '1200px',
    },
    extend: {
      colors: {
        white: '#fcfcfc',
        text: '#93E2E4',
        cta: '#007D83',
      },
    },
  },
  plugins: [],
};
