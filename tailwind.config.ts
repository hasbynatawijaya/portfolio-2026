import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brutalist: {
          black: '#000000',
          white: '#FFFFFF',
          gray: '#808080',
          'gray-light': '#CCCCCC',
          'gray-dark': '#1A1A1A',
          accent: '#FF0000',
          yellow: '#FFFF00',
          green: '#00FF00',
          blue: '#0000FF',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Courier New', 'Courier', 'monospace'],
        sans: ['Inter', 'Arial', 'Helvetica', 'sans-serif'],
        display: ['Space Grotesk', 'Arial Black', 'Impact', 'sans-serif'],
      },
      fontSize: {
        'brutalist-xl': ['8rem', { lineHeight: '1', fontWeight: '900', letterSpacing: '-0.02em' }],
        'brutalist-lg': ['4rem', { lineHeight: '1.1', fontWeight: '800', letterSpacing: '-0.01em' }],
        'brutalist-md': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        'brutalist-sm': ['1.5rem', { lineHeight: '1.3', fontWeight: '700' }],
      },
      boxShadow: {
        brutalist: '8px 8px 0px 0px rgba(0,0,0,1)',
        'brutalist-sm': '4px 4px 0px 0px rgba(0,0,0,1)',
        'brutalist-lg': '12px 12px 0px 0px rgba(0,0,0,1)',
        'brutalist-inset': 'inset 4px 4px 0px 0px rgba(0,0,0,0.2)',
        'brutalist-white': '8px 8px 0px 0px rgba(255,255,255,1)',
        'brutalist-white-sm': '4px 4px 0px 0px rgba(255,255,255,1)',
        'brutalist-accent': '8px 8px 0px 0px rgba(255,0,0,1)',
      },
      borderWidth: {
        brutalist: '3px',
        'brutalist-thick': '5px',
      },
      animation: {
        glitch: 'glitch 1s linear infinite',
        'glitch-slow': 'glitch 3s linear infinite',
        scan: 'scan 8s linear infinite',
        'text-scramble': 'text-scramble 0.5s ease-in-out',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-right': 'slideRight 0.6s ease-out forwards',
        blink: 'blink 1.2s step-end infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        'text-scramble': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      screens: {
        xs: '475px',
      },
      spacing: {
        brutalist: '8px',
      },
    },
  },
  plugins: [],
} satisfies Config;
