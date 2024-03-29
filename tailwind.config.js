const plugin = require('tailwindcss/plugin')

const systemFontStack = [
  'system-ui',
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  '"Helvetica Neue"',
  'Arial',
  '"Noto Sans"',
  'sans-serif',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
  '"Noto Color Emoji"',
]

module.exports = {
  purge: ['./**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '500px',
      md: '768px',
      ml: '800px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      /**
       * Main
       */
      transparent: 'transparent',
      brand: '#DB2777',
      action: '#3B82F6',
      link: '#4F46E5',
      /**
       * Semantic
       */
      success: '#10B981',
      ['success-dark']: '#047857',
      ['success-light']: '#D1FAE5',
      error: '#f44336',
      ['error-dark']: '#d32f2f',
      ['error-light']: '#ffcdd2',
      warning: '#F59E0B',
      ['warning-dark']: '#B45309',
      ['warning-light']: '#FEF3C7',
      /**
       * Gray scale
       */
      black: '#111827',
      ['near-black']: '#1F2937',
      ['grey-dark-x3']: '#374151',
      ['grey-dark-x2']: '#4B5563',
      ['grey-dark']: '#6B7280',
      ['grey']: '#9CA3AF',
      ['grey-light']: '#D1D5DB',
      ['grey-light-x2']: '#E5E7EB',
      ['grey-light-x3']: '#F3F4F6',
      ['near-white']: '#f3f4f4',
      white: '#FAFAFA',
      /**
       * Other
       */
      ['berry']: '#AA00FF',
      ['matcha']: '#4CAF50',
      ['deepsea']: '#0091EA',
      ['sunrise']: '#FFC107',
      ['orange']: '#F57F17',
    },
    spacing: {
      px: '1px',
      0: '0',
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      8: '2rem',
      10: '2.5rem',
      12: '3rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      32: '8rem',
      40: '10rem',
      48: '12rem',
      56: '14rem',
      64: '16rem',
    },
    inset: {
      0: 0,
      auto: 'auto',
      5: '5px',
    },
    opacity: {
      0: '0',
      20: '0.2',
      40: '0.4',
      60: '0.6',
      80: '0.8',
      100: '1',
    },
    fontFamily: {
      sans: ['Lato', ...systemFontStack],
      display: ['Lato', ...systemFontStack],
      mono: [
        'Roboto Mono',
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },
    fontSize: {
      xs3: '0.55rem',
      xxs: '0.65rem',
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    fontWeight: {
      hairline: '100',
      light: '300',
      normal: '400',
      semibold: '600',
      bold: '700',
      extrabold: '800',
    },
    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
    },
    corePlugins: {
      backgroundPosition: false,
      backgroundSize: false,
      backgroundOpacity: false,
      gridTemplateColumns: false,
      gridColumn: false,
      gridColumnStart: false,
      gridColumnEnd: false,
      gridTemplateRows: false,
      gridRow: false,
      gridRowStart: false,
      gridRowEnd: false,
      gap: false,
      maxHeight: false,
      objectPosition: false,
      transformOrigin: false,
      transitionTimingFunction: false,
    },
    extend: {
      inset: {
        '1/2': '50%',
      },
      minHeight: {
        inherit: 'inherit',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.bg-action-gradient': {
          backgroundColor: '#382fee',
          background:
            'linear-gradient(90deg, rgba(56,47,238,1) 0%, rgba(121,59,252,1) 100%)',
        },
      })
    }),
  ],
}
