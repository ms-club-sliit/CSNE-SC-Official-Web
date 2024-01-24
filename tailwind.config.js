/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'contact-us-background': 'url("/public/contact-background.png")',

      },
      colors: {
        whitegray: '#FBFBFB',
        white: '#FFFFFF',
        gray: '#565656',
        lightgray: '#9E9E9E',
        darkblue: '#1D1163',
      },
      height: {
        '57vh': '57vh',
        '80vh': '80vh',
      },
      margin: {
        '20px': '70px',
      },
      width: {
        '62%': '62%',
        '530px': '530px',
        '1000px': '1000px',
        '600px': '600px',
      }

    },
  },
  plugins: [],
}
