/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blackBtn: '#161616',
        fontAccent: '#ff4d30',
        activeEl: '#FF4C30',
        shadowClr: 'rgba(255,83,48,.35)',
        Dot: '#bbb6cb',
        activeDot: '#ff6f1e',
        backgroundLight: '#f8f8f8',
        backgroundDark: '#2d2d2d',
        'testimonials-bg': '#f9f9f9',
        ctaClr: '#2d2d2d',
        sliderBg: '#f1f1f1',
      },
      fontFamily: {
        sans: ['Rubik', 'sans-serif'],
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
    },
  },
  plugins: [],
};
