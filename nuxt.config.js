import webpack from 'webpack'

export default {
  target: 'server',

  ssr: true,

  // loading
  loadingIndicator: {
    // name: 'chasing-dots',
    // color: 'pink',
    // background: 'white'
  },

  loading:{
    color: '#fbcfe8',
  },

  // Global page headers
  head: {
    title: 'Gourmet District',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      // { charset: 'utf-8' },
      // { name: 'theme-color', content: '#ffffff' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1,maximum-scale=1' },
      { hid: 'description', name: 'description', content: 'The first indoor food court in qatar' },
      // { name: 'format-detection', content: 'telephone=no' },
      // { name: 'msapplication-TileColor', content: '#ffffff' },
      // { name: 'msapplication-TileImage', content: '/images/logo/ms-icon-144x144.png' },
      // { name: 'msapplication-navbutton-color', content: '#ffffff' },
      // { name: 'theme-color', content: '#ffffff' },
      // { name: 'apple-mobile-web-app-capable', content: 'yes' },
      // { name: 'apple-mobile-web-app-status-bar-style', content: '#ffffff' },
      // { name: 'apple-mobile-web-app-capable', content: 'yes' },
      // { name: 'apple-mobile-web-app-status-bar-style', content:'black'},
      // { name: 'apple-mobile-web-app-title', content:"Gourmet"},
    ],
    link: [
      // { rel: "icon", type: "image/x-icon", href: "/images/logo/favicon.ico" },
      // { rel:"icon", type:"image/png", sizes:"192x192", href:"/images/logo/android-icon-192x192.png" },
      // { rel:"icon", type:"image/png", sizes:"32x32", href:"/images/logo/favicon-32x32.png" },
      // { rel:"icon", type:"image/png", sizes:"96x96", href:"/images/logo/favicon-96x96.png" },
      // { rel:"icon", type:"image/png", sizes:"16x16", href:"/images/logo/favicon-16x16.png" },
      // { rel:"apple-touch-icon", sizes:"57x57", href:"/images/logo/apple-icon-57x57.png" },
      // { rel:"apple-touch-icon", sizes:"60x60", href:"/images/logo/apple-icon-60x60.png" },
      // { rel:"apple-touch-icon", sizes:"72x72", href:"/images/logo/apple-icon-72x72.png" },
      // { rel:"apple-touch-icon", sizes:"76x76", href:"/images/logo/apple-icon-76x76.png" },
      // { rel:"apple-touch-icon", sizes:"114x114", href:"/images/logo/apple-icon-114x114.png" },
      // { rel:"apple-touch-icon", sizes:"120x120", href:"/images/logo/apple-icon-120x120.png" },
      // { rel:"apple-touch-icon", sizes:"144x144", href:"/images/logo/apple-icon-144x144.png" },
      // { rel:"apple-touch-icon", sizes:"152x152", href:"/images/logo/apple-icon-152x152.png" },
      // { rel:"apple-touch-icon", sizes:"180x180", href:"/images/logo/apple-icon-180x180.png" },
      // { rel:"manifest", href:"/manifest.json" },
      //{ rel:"canonical", href:"https://www.g-d.qa/" },
    ],
    // script:[
    //   {
    //     src:"https://cdn.jsdelivr.net/npm/pwacompat@2.0.6/pwacompat.min.js",
    //     integrity:"sha384-GOaSLecPIMCJksN83HLuYf9FToOiQ2Df0+0ntv7ey8zjUHESXhthwvq9hXAZTifA",
    //     crossorigin:"anonymous" ,
    //     defer:true
    //   }
    // ],
    bodyAttrs: {
      class: 'bg-light-surface dark:bg-dark-surface text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary',
    }
  },

  // Global CSS
  css: [
    'assets/css/style.css',
    'animate.css/animate.min.css',
    'assets/css/nucleo-icons.css',
  ],

  // Plugins to run before rendering page:
  plugins: [
    '~/plugins/app-plugins',
    // '~/plugins/i18n',
    // '~/plugins/extra/polyfills',
    '~/plugins/html-to-paper.js',
    '~/plugins/directives',
    '~/plugins/qrcode',
    '~/plugins/scroll-behaviour',
  ],

  // Auto import components
  components: true,

  // Modules for dev and build (recommended):
  buildModules: [
    '@nuxtjs/svg',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/pwa',
    '@nuxtjs/laravel-echo',
  ],

  // Modules:
  modules: [
    'nuxt-i18n',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    'vue-sweetalert2/nuxt'
  ],

  // sweet alert
  sweetalert: {
    confirmButtonColor: '#ec4899',
    cancelButtonColor: '#ff7674'
  },

  // echo
  echo: {
    broadcaster: 'pusher',
    key: 'c2be61a4be77aa9b3c47',
    cluster: 'ap2',
    forceTLS: true
  },

  // router
  router: {
    //middleware: ['auth']
  },

  // Auth
  auth:{
    strategies:{
      'laravelSanctum': {
        provider: 'laravel/sanctum',
        url: process.env.API.slice(0, -1),
        endpoints:{
          login: {
            url: '/api/login'
          },
          logout:{
            url: '/api/logout'
          },
          user: {
            property: false
          }
        }
      }
    },
    redirect: {
      login: '/login',
      logout: '/',
      home: '/'
    }
  },
  axios: {
    baseURL: process.env.API,
    proxy: false,
    credentials: true
  },

  proxy: {
    '/api': {
      target: process.env.API,
      pathRewrite: { '^/api': '/' }
    }
  },

  // dark-mode lib
  colorMode: {
    preference: 'light'
  },

  // locale lib
  i18n: {
    //strategy: 'no_prefix',
    locales: [
      {
        name: 'English',
        code: 'en',
        file: 'en.js',
        icon: 'united-states-flag',
        iso: 'en-US',
        dir: 'ltr',
      },
      {
        name: 'العربية',
        code: 'ar',
        file: 'ar.js',
        icon: 'qatar-flag',
        iso: 'ar',
        dir: 'rtl',
      }
    ],
    vueI18n: {
      fallbackLocale: 'en'
    },
    parsePages: false,
    detectBrowserLanguage: false,
    seo: false,
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'en',
  },
  
  // 404 fallback
  generate: {
    fallback: true,
    routes: ['/', '404']
  },

  // progressive we app lib
  pwa: {
    icon: {
      source: 'static/icon.png',
      filename: 'icon.png'
    },
    manifest: {
      name: 'Gourmet District',
      short_name: 'Gourmet',
      description: 'Gourmet district the first indoor food court in Qatar.',
      // start_url: "./?mode=standalone"
    },
    meta: {
      name: 'Gourmet',
      description: 'Gourmet district the first indoor food court in Qatar.',
      theme_color: '#ffffff',
      lang: 'en',
      // favicon: true,
      //mobileApp: true,
      //mobileAppIOS: true,
      //appleStatusBarStyle: 'black-translucent',
      nativeUI: true,
    }
  },

  // env
  env: {
    URL: process.env.URL || false,
    API: process.env.API || false,
  },

  publicRuntimeConfig: {
    appLocale: process.env.APP_LOCALE || 'en',
    URL: process.env.URL || false,
    API: process.env.API || false,
  },

  // Build Configuration
  build: {
    extractCSS: true,
    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true
      },
      plugins: [
        new webpack.IgnorePlugin({
          resourceRegExp: /^\.\/locale$/,
          contextRegExp: /moment$/
        })
      ],
      loaders:  {
        vue: {
           prettify: false
        }
      }
    },
  },

  // Server Configuration
  server:{
    host: "0.0.0.0"
  }
}
