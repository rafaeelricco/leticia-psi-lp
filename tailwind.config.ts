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
            forum: ['Forum', 'sans-serif'],
            gadugi: ['Gadugi', 'sans-serif'],
            'noto-serif-oriya': ['Noto Serif Oriya', 'serif'],
            'retro-signature': ['Retro Signature', 'cursive']
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
         }
      }
   },
   plugins: [tailwindcssAnimate]
}
export default config
