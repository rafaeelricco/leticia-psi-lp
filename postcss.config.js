module.exports = {
   plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': {},
      tailwindcss: {},
      // See more about `cssnano` here: https://tailwindcss.com/docs/optimizing-for-production
      autoprefixer: {},
      ...(process.env.APP_ENV === 'production' ? { cssnano: {} } : {})
   }
}
