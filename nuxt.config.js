const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/nuxt-pwa/'
  }
} : {}

module.exports = {
  ...routerBase,
  mode: 'spa',
  modules: [
    '@nuxtjs/pwa'
  ],
  manifest: {
    name: 'yasutomog nuxt pwa',
    lang: 'ja',
    "short_name": "ynp",
    "icons": [
      {
        "src": "/nuxt-pwa/android-chrome-192x192.png",
        "sizes": "192x192",
        "type": "image/png"
      },
      {
        "src": "/nuxt-pwa/android-chrome-512x512.png",
        "sizes": "512x512",
        "type": "image/png"
      }
    ]
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-pwa',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

