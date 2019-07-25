export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Douglas Glover | Freelance Web Developer in Toronto, Canada',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Freelance web developer based in Toronto, Ontario, Canada. Working on sites in a LAMP stack with Symfony 4 or JAM stack with Vue, Nuxt, and Netlify!'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    ['@nuxtjs/google-tag-manager', { 
      id: 'GTM-T5G493F',
      pageTracking: true,
      dev: false
    }],
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
