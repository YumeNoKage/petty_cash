module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        colors: {
            black: {
                DEFAULT: '#1D1D21',
            },
            red: {
                DEFAULT: '#E33F4F',
            },
            blue: {
                DEFAULT: '#2479D5',
            },
            yellow: {
                DEFAULT: '#FFB319',
            },
            grey: {
                light: '#EFEFF1',
                DEFAULT: '#707075',
            },
            white_transparent: {
                light: 'rgba(255, 255, 255, 0.5)',
                DEFAULT: 'rgba(255, 255, 255, 0.05)',
                dark: 'rgba(255, 255, 255, 0.8)'
            }
        },
        borderRadius: {
            small: '5px',
            DEFAULT:'15px',
            large: '30px'
        },
        spacing: {
            '1': '10px',
            '2': '20px',
            '3': '30px',
            '4': '40px',
            '5': '50px',
            '6': '60px',
            '100' : '100px'
        },
        fontFamily: {
            'roboto-mono': ["'Roboto Mono'", "monospace"],
            'abeezee': ["'ABeeZee'", "sans-serif"],
        },
        letterSpacing: {
            tightest: '-.1rem',
        }
    },
  },
  variants: {
    extend: {
        translate: ['hover'],
    },
  },
  plugins: [],
}
