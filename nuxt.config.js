module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'Rahul Kadyan',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {
        hid: 'description',
        name: 'description',
        content: 'A Hobbyist, An Entrepreneur, A Dreamer, Prefers Spaces over Tabs and (may be little bit) A Writer!'
      },
      {name: 'mobile-web-app-capable', content: 'yes'},
      {name: 'apple-mobile-web-app-capable', content: 'yes'},
      {name: 'application-name', content: 'znck'},
      {name: 'apple-mobile-web-app-title', content: 'znck'},
      {name: 'theme-color', content: '#ff574a'},
      {name: 'msapplication-navbutton-color', content: '#ff574a'},
      {name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent'},
      {name: 'msapplication-starturl', content: '/'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no'},

    ],
    link: [
      {rel: 'manifest', href: 'manifest.json'},
      {rel: 'icon', type: 'image/png', sizes: '512x512', href: 'icon-512.png'},
      {rel: 'apple-touch-icon', type: 'image/png', sizes: '512x512', href: 'icon-512.png'},
      {rel: 'icon', type: 'image/png', sizes: '192x192', href: 'icon-192.png'},
      {rel: 'apple-touch-icon', type: 'image/png', sizes: '192x192', href: 'icon-192.png'},
      {rel: 'icon', type: 'image/png', sizes: '144x144', href: 'icon-144.png'},
      {rel: 'apple-touch-icon', type: 'image/png', sizes: '144x144', href: 'icon-144.png'},
      {rel: 'icon', type: 'image/png', sizes: '96x96', href: 'icon-96.png'},
      {rel: 'apple-touch-icon', type: 'image/png', sizes: '96x96', href: 'icon-96.png'},
      {rel: 'icon', type: 'image/png', sizes: '72x72', href: 'icon-72.png'},
      {rel: 'apple-touch-icon', type: 'image/png', sizes: '72x72', href: 'icon-72.png'},
      {rel: 'icon', type: 'image.png', sizes: '48x48', href: 'icon-48.png'},
      {rel: 'apple-touch-icon', type: 'image.png', sizes: '48x48', href: 'icon-48.png'},
    ]
  },
  router: {
    mode: 'history'
  },

  modules: [],
  /*
   ** Customize the progress-bar color
   */
  loading: {color: '#ff574a'},
  /*
   ** Build configuration
   */
  build: {
    loaders: {
      scss: {
        implementation: require('sass'),
      },
    },
  }
}
