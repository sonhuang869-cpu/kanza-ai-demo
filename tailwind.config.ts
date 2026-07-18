import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      colors: {
        // Strict 4-color palette
        ink: {
          DEFAULT: '#0F0F0F',
          soft: '#1F1F1F',
          muted: '#404040',
          subtle: '#78716C',
        },
        ivory: {
          DEFAULT: '#FAF6EE',
          warm: '#F5EFE1',
          deep: '#EDE4D0',
        },
        terracotta: {
          DEFAULT: '#A93E1E',
          soft: '#C4522E',
          light: '#F5E4DD',
        },
        sage: {
          DEFAULT: '#4A7C4E',
          light: '#DCEEE0',
        },
      },
      fontSize: {
        'display': ['clamp(3.5rem, 9vw, 8rem)', { lineHeight: '0.9', letterSpacing: '-0.04em' }],
      },
      boxShadow: {
        'editorial': '0 1px 0 rgba(15, 15, 15, 0.08), 0 20px 40px -20px rgba(15, 15, 15, 0.1)',
        'editorial-lg': '0 1px 0 rgba(15, 15, 15, 0.08), 0 40px 80px -30px rgba(15, 15, 15, 0.2)',
      },
    },
  },
  plugins: [],
};

export default config;
