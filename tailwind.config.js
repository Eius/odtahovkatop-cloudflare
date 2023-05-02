/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '12rem',
      }
    },
    colors: {
      "white": "#f2f2f2",
      "black": "#000000",
      "gray": {
        "1": "#f2f2f2",
        "2": "#d9d9d9",
      },
      "yellow": "#F4E04D",
      "facebook": "#1778f2",
      "primary": "#2b2424",
      "secondary": "#161010",
      "accent": {
        "1": "#d42020",
        "2": "#f2f2f2",
      },
    },
    breakpoints: {
      sm: "596px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px",
    },
    skew: {
      "30": "30deg",
    },
    extend: {},
  },
  plugins: [],
}

