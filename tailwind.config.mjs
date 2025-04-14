

const config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        normal: ['Product-Sans', 'system-ui'],
        medium: ['Product-Sans-Medium', 'system-ui'],
        semibold: ['Product-Sans-SemiBold', 'system-ui'],
        bold: ['Product-Sans-Bold', 'system-ui'],
        black: ['Product-Sans-Black', 'system-ui'],
      },
      boxShadow: {
        '3xl': '0px 15px 35px rgba(13, 21, 55, 0.08)',
      },
      screens: {
        '2xl': {'max': '1535px'},
        'xl': {'max': '1279px'},
        'lg': {'max': '1023px'},
        'md': {'max': '767px'},
        'sm': {'max': '414px'},
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-hide': {
          scrollbarWidth: 'none',
          '-ms-overflow-style': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ]
};

export default config;
