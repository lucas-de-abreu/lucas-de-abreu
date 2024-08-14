const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      background: '#282a36',
      secondary: '#44475a',
      foreground: '#f8f8f2',
      pink: '#ff79c6',
      purple: '#bd93f9',
    },
    extend: {
      animation: {
        wavy: 'wavy 1.4s infinite ease-in-out alternate',
        grow: 'grow 0.3s 1 ease',
      },
      keyframes: {
        wavy: {
          '0%': {
            transform: 'translateY(2.5px)',
          },
          '50%': {
            transform: 'translateY(-2.5px)',
          },
          '100%': {
            transform: 'translateY(2.5px)',
          },
        },
        grow: {
          '0%': {
            transform: 'scale(1)',
          },
          '75%': {
            transform: 'scale(1.3)',
          },
          '100%': {
            transform: 'scale(1.2)',
          },
        },
      },
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'animation-delay': (value) => {
            return {
              'animation-delay': value,
            }
          },
        },
        {
          values: theme('transitionDelay'),
        },
      )
    }),
  ],
}
