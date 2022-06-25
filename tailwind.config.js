/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './src/**/*.{html,ts}' ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': {
        DEFAULT: '#ffffff',
        low: '#ffffff1a',
        medium: '#ffffff59',
      },
      'violet': {
        light: '#939bf4',
        DEFAULT: '#5964E0',
        low: '#5964E01a',
        medium: '#5964E059',
      },
      'blue': {
        vdark: '#19202d',
      },
      'grey': {
        light: '#f4f6f8',
        DEFAULT: '#9daec2',
        dark: '#6e8098',
      },
      'midnight': '#121721',
    },
    fontSize: {
      sm: '1.4rem',
      md: '1.6rem',
      lg: '2rem',
      lx: '2.4rem',
      xl: '2.8rem',
    },
    lineHeight: {
      sm: '1.8rem',
      ms: '2rem',
      md: '2.6rem',
      lg: '2.4rem',
      lx: '2.9rem',
      xl: '3.4rem',
    },
    extend: {
      spacing: {
        0.8: '0.8rem',
        1.2: '1.2rem',
        1.6: '1.6rem',
        2.4: '2.4rem',
        3.2: '3.2rem',
        4.8: '4.8rem',
        ct: '111rem',
      },
      borderRadius: {
        2: '2rem',
        2.4: '2.4rem',
      },
      backgroundImage: {
        'header-desktop': "url('/assets/desktop/bg-pattern-header.svg')",
        'header-mobile': "url('/assets/desktop/bg-pattern-header.svg')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
  darkMode: 'class',
}
