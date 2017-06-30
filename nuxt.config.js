module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Rahul Kadyan',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A Hobbyist, An Entrepreneur, A Dreamer, Prefers Spaces over Tabs and (may be little bit) A Writer!' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  router: {
    mode: 'history'
  },

  modules: [
    ['@nuxtjs/blog', {
        base: process.env.NODE_ENV === 'production' ? 'https://znck.me' : 'http://localhost:3000',
        static: true,
        comments: true,
        disqus: {
          shortname: 'rahulkadyan',
          url: 'https://znck.me'
        }
    }],
    '@nuxtjs/axios',
    '@nuxtjs/workbox',
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#ff574a' },
  /*
  ** Build configuration
  */
  build: {
    loaders: [
      {
        test: /\.yml$/,
        loader: 'yml-loader'
      }
    ]
  }
}
