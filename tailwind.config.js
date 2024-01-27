/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        "hero-section-image": "200px",
      },
      backgroundColor: {
        "hero-section-button": "#1D1163",
        "hero-section-shape": "#DAE9FF",
      },
      margin: {
        "hero-image-margin-top": "30px",
        "hero-section-margin-left": "89.87px",
        "hero-section-margin-top": "70px",
      },
      width: {
        "hero-section-text-width": "300px",
      },
      height: {
        "hero-section-text-height": "441.41px",
        "hero-section-image-height": "378px",
      },
    },
  },
  plugins: [],
};
