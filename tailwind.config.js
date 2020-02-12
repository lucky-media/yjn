module.exports = {
  theme: {
    fontFamily: {
      'sans': 'Montserrat, -apple-system, BlinkMacSystemFont',
    },
    colors: {
      white: '#fff',
      transparent: 'transparent',
      gray: {
        200: '#F9F9F9',
        500: '#666666',
        600: '#F0F1F2',
      },
      blue: {
        700: '#2D2E46',
        600: '#32334E',
        500: '#1E2057',
        400: '#484A7D'
      },
      yellow: {
        500: '#FFF600'
      }
    },
    extend: {
      fontSize: {
        '7xl': '5rem',
      },
      height: {
        '70': '22rem'
      }
    }
  },
  variants: {
    margin: ['responsive', 'last'],
    borderWidth: ['responsive', 'last']
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    require('tailwind-bootstrap-grid')({
      gridGutterWidth: '32px',
    })
  ]
}