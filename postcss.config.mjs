/** @type {import('postcss-load-config').Config} */
const config = {
   plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': {},
      tailwindcss: {},
      // See more about `cssnano` here: https://tailwindcss.com/docs/optimizing-for-production
      autoprefixer: {},
      cssnano: {}
   }
}

export default config
