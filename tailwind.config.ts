import type { Config } from 'tailwindcss'
import tailwindcssAnimate from 'tailwindcss-animate'

const config: Config = {
   darkMode: ['class'],
   content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
      './src/features/**/*.{js,ts,jsx,tsx,mdx}'
   ],
   mode: 'jit',
   theme: {
      extend: {
         container: {
            center: true,
            padding: {
               DEFAULT: '1rem',
               sm: '2rem',
               md: '2rem',
               lg: '4rem',
               xl: '5rem',
               '2xl': '6rem'
            },
            screens: {
               sm: '640px',
               md: '768px',
               lg: '1024px',
               xl: '1280px',
               '2xl': '1536px'
            }
         },
         fontFamily: {
            forum: ['var(--font-forum)', 'sans-serif'],
            gadugi: ['var(--font-gadugi)', 'sans-serif'],
            'noto-serif-oriya': ['var(--font-noto-serif-oriya)', 'serif'],
            'retro-signature': ['var(--font-retro-signature)', 'cursive']
         },
         colors: {
            primary: '#A9C091',
            green: 'rgba(103,120,85,0.6)',
            secondary: '#BB7F61',
            support01: '#BBD4A1',
            support02: '#CACDA5',
            support03: '#B28665',
            support04: '#6E422C',
            support05: '#CCB79F',
            support06: '#677855',
            support07: '#FAF3EB'
         },
         keyframes: {
            'accordion-down': {
               from: {
                  height: '0'
               },
               to: {
                  height: 'var(--radix-accordion-content-height)'
               }
            },
            'accordion-up': {
               from: {
                  height: 'var(--radix-accordion-content-height)'
               },
               to: {
                  height: '0'
               }
            }
         },
         animation: {
            'accordion-down': 'accordion-down 0.2s ease-out',
            'accordion-up': 'accordion-up 0.2s ease-out'
         }
      }
   },
   plugins: [tailwindcssAnimate]
}
export default config
