/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '375px',
        'xs3': '515px',
        sm: '640px',
        sm2: '689px',
        md: '768px',
        lg: '1024px',
        lg2: '1090px',
        lg3: '1160px',
        xl: '1280px',
        '2xl': '1440px',
        '3xl': '1920px',
        
      },
      fontWeight: {
        '400': 400,
        '500': 500,
        '600': 600,
        '700': 700,
        '800': 800,
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'display-01': ['3rem', { lineHeight: '1.2' }], // Display 01
        'heading-01': ['2.25rem', { lineHeight: '1.3' }], // Heading 01
        'heading-02': ['2rem', { lineHeight: '1.3' }], // Heading 02
        'heading-03': ['1.75rem', { lineHeight: '1.4' }], // Heading 03
        'heading-04': ['1.5rem', { lineHeight: '1.4' }], // Heading 04
        'heading-05': ['1.25rem', { lineHeight: '1.4' }], // Heading 05
        'body-xxl': ['1.5rem', { lineHeight: '1.5' }], // Body XXL
        'body-xl': ['1.125rem', { lineHeight: '1.5' }], // Body XL
        'body-large': ['1remrem', { lineHeight: '1.5' }], // Body Large
        'body-medium': ['0.875rem', { lineHeight: '1.5' }], // Body Medium
        'body-small': ['0.75rem', { lineHeight: '1.4' }], // Body Small
        'body-tiny': ['0.625rem', { lineHeight: '1.4' }], // Body Tiny
      },
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
