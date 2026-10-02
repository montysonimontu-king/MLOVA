/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        banana: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        cocoa: {
          50: '#fdf6f0',
          100: '#f8e4d4',
          200: '#edc9a8',
          300: '#dca976',
          400: '#c8895a',
          500: '#a86b3f',
          600: '#8a5430',
          700: '#6b4124',
          800: '#4d2f1a',
          900: '#2e1c0f',
        },
      },
      fontFamily: {
        display: ['"Fredoka"', 'system-ui', 'sans-serif'],
        body: ['"Nunito"', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        wobble: {
          '0%,100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        'float-slow': {
          '0%,100%': { transform: 'translateY(0) rotate(0)' },
          '50%': { transform: 'translateY(-30px) rotate(8deg)' },
        },
        'pop-in': {
          '0%': { opacity: '0', transform: 'scale(0.8) translateY(20px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'bounce-fast': {
          '0%,100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-12px)' },
          '60%': { transform: 'translateY(-12px)' },
        },
      },
      animation: {
        wobble: 'wobble 2s ease-in-out infinite',
        float: 'float 4s ease-in-out infinite',
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'pop-in': 'pop-in 0.6s ease-out forwards',
        marquee: 'marquee 25s linear infinite',
        'bounce-fast': 'bounce-fast 0.8s ease infinite',
      },
    },
  },
  plugins: [],
};
