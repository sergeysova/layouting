module.exports = {
  purge: ['./src/**/*.ts', './src/**/*.html', './index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    screens: {
      // If we need to add a new breakpoints, we need to add it to js code too
      // Search for `createMediaMatcher`
      desktop: '700px',
    },
    minWidth: {
      0: '0px',
      section: '300px',
      'section-small': '180px',
    },
    extend: {
      colors: {
        effector: {
          300: '#ff8c00',
          600: '#e95801',
          800: '#be5e00',
        },
        background: 'var(--theme-background)',
        foreground: 'var(--theme-foreground)',
      },
      gridTemplateRows: {
        'header-content': 'auto minmax(0, 1fr)',
        'content-only': 'minmax(0, 1fr)',
      },
      gridTemplateColumns: {
        pcp: 'auto minmax(0, 1fr) auto',
      },
      minWidth: {
        0: '0px',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active', 'disabled', 'checked'],
      borderColor: ['disabled', 'checked'],
      cursor: ['disabled'],
      inset: ['checked'],
      zIndex: ['hover', 'active'],
      textColor: ['disabled'],
    },
  },
};
