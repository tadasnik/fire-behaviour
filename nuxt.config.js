export default {
  // Target: https://go.nuxtjs.dev/config-target

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'behave',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/@mdi/font@5.8.55/css/materialdesignicons.min.css'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main-style.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources'
  ],

  styleResources: {
    scss: [
      '~/assets/css/utilities.scss',
      '~/assets/vars/colors.scss'
    ]
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    '@nuxtjs/axios',
    'nuxt-material-design-icons',
    'nuxt-highcharts',
    'cookie-universal-nuxt',
    ['nuxt-buefy', { css: false, materialDesignIcons: true }]
  ],
  axios: {
    baseURL: 'https://vuebehaveplus-default-rtdb.europe-west1.firebasedatabase.app'
  },

  publicRuntimeConfig: {
    axios: {
      baseURL: process.env.baseUrl || 'https://vuebehaveplus-default-rtdb.europe-west1.firebasedatabase.app'
    }
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.BASE_URL,
      firebaseKey: process.env.FIREBASE_KEY
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
      '@cbevins/fire-behavior-simulator',
      'd3',
      'internmap'
    ]
  }
}
