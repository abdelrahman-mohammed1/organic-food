/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        softPrimary: '#84D187',
        primary: '#00B207',
        hardPrimary: '#2C742F',
        warning: '#FF8A00',
        danger: '#EA4B48',
        white: '#FFFFFF',
        gray: {
          900: '#1A1A1A',
          800: '#333333',
          700: '#4D4D4D',
          600: '#666666',
          500: '#808080',
          400: '#999999',
          300: '#B3B3B3',
          200: '#CCCCCC',
          100: '#E6E6E6',
          50: '#F2F2F2',
        },
        green: {
          900: '#002603',
          800: '#173B1A',
          700: '#2B572E',
          600: '#406B42',
          500: '#618062',
          400: '#7A997C',
          300: '#96B297',
          200: '#B4CCB4',
          100: '#DAE5DA',
          50: '#EDF2EE',
        },
      },
    },
  },
  plugins: [],
};
