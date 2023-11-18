/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '358px',
      // => @media (min-width: 576px) { ... }

      'md': '771px',
      // => @media (min-width: 960px) { ... }

      'lg': '1128px',
      // => @media (min-width: 1440px) { ... }
    },
    fontFamily: {
      sans: ['Roboto', 'sans'],
      serif: ['"Times New Roman"', 'serif'],
    },
    fontSize: {
      '6xl': '80px'
    },
    colors: {
      primary: "#C18653",
      secondary: {
        50: '#fff',
        100: '#FAFAFA',
        200: '#BFBFBF'
      },
      gray: {
        50: '#434343',
        100: '#262626',
        200: '#141414',
        300: '#000',
      },
      blue: "#1A73E8"
    },
    extend: {
      lineHeight: {
        '7xl': '86px'
      }
    },
  },
  plugins: [],
}

