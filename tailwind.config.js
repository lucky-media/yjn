const config = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        ...config.fontFamily,
        'sans': 'Montserrat, -apple-system, BlinkMacSystemFont',
      },
      colors: {
        gray: {
          ...config.colors.gray,
          200: '#F9F9F9',
          500: '#666666',
          600: '#F0F1F2',
        },
        blue: {
          ...config.colors.blue,
          700: '#2D2E46',
          600: '#32334E',
          500: '#1E2057',
          400: '#484A7D'
        },
        yellow: {
          ...config.colors.yellow,
          500: '#FFF600'
        },
      },
      fontSize: {
        '7xl': '5rem',
      },
      height: {
        '70': '22rem'
      }
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    require('tailwind-bootstrap-grid')({
      gridGutterWidth: '32px',
      containerMaxWidths: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1280px',
      },
    }),
    require('@tailwindcss/typography')
  ],
}
