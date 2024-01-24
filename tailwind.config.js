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
      },
      extend: {
      colors: {
        gray: { 50: "#f4f9ff", 500: "#959595", 600: "#757575" },
        orange: { 50: "#fff4da" },
        blue_gray: { 50: "#f1f1f1" },
        indigo: { 900: "#1d1163",700:"#4f4596" },
      },
      fontFamily: {
        arial: "Arial",
        avertademopecutteddemo: "Averta Demo PE Cutted Demo",
      }
    },
    },
  },
  plugins: [],
}
