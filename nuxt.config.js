const pkg = require('./package')

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Siden',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '~/assets/main.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/component-cache
    ['@nuxtjs/component-cache', {
      maxAge: 1000 * 60 * 60
    }],
    // Doc: https://nuxt-community.github.io/nuxt-i18n/
    ['nuxt-i18n', {
      // Options
      seo: false,
      baseUrl: 'https://www.zhaojiami.cn',
      lazy: true,
      langDir: 'lang/',
      locales: [
        { code: 'zh', iso: 'zh-CN', file: 'zh.js' },
        { code: 'en', iso: 'en-US', file: 'en.js' }
      ],
      defaultLocale: 'en',
      vueI18n: {
        fallbackLocale: 'en'
      }
    }],
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/toast
    // '@nuxtjs/toast', // IE10 +
    // Doc: https://github.com/nuxt-community/axios-module#usage
    // '@nuxtjs/axios',
    // Doc: https://auth.nuxtjs.org/
    // '@nuxtjs/auth',
    // Doc: https://github.com/nuxt-community/redirect-module
    '@nuxtjs/redirect-module'
  ],
  /*
  ** Axios module configuration
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    // host: '10.101.90.182',
    // port: 8020,
    prefix: `/${pkg.name}/`
    // , https: true
    , proxy: true
  },
  */
  proxy: {
    // '/testApi/': 'http://api.example.com',
    // '/testApi2/': {
    //   target: 'http://api.example.com',
    //   pathRewrite: {
    //     '^/api/': ''
    //   }
    // }
  },
  /*
  ** Auth module configuration
  auth: {
    redirect: {
      login: '/login', //login: User will be redirected to this path if login is required.
      logout: '/', //logout: User will be redirected to this path if after logout, current route is protected.
      home: '/', //home: User will be redirect to this path after login. (rewriteRedirects will rewrite this path)
      callback: '/login' //User will be redirect to this path by the identity provider after login. (Should match configured 
    },
    token: {
      prefix: '_my_tk_pre.'
    },
    localStorage: {
      prefix: 'my_ls_pre.'
    },
    cookie: {
      prefix: 'my_ck_pre.',
      // options: {
      //   path: '/'
      // }
    },
    vuex: {
      namespace: 'auth' // Vuex store namespace for keeping state.
    },
    rewriteRedirects: true, // default true, If enabled, user will redirect back to the original guarded route instead of redirect.home.
    fullPathRedirect: false, // default false, If true, use the full route path with query parameters for redirect
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/api/auth/login',
            method: 'post',
            propertyName: 'token.accessToken' // pecify which field of the response JSON to be used for value
          },
          logout: {
            url: '/api/auth/logout',
            method: 'post'
          },
          user: {
            url: '/api/auth/user',
            method: 'get',
            propertyName: 'user'
          }
        }
      }
    }
  },
  */
  /*
  ** Redirect module configuration
  */
  redirect: [
    // { from: '^/anotherold/(.*)$', to: '/new/$1', statusCode: 301 }, // One to one mapping
    { from: '^/index\.html$', to: `/`, statusCode: 302 } // Old SPA address ${pkg.name}/
  ],
  /**
   * 
   */
  router: {
    // base: `/${pkg.name}/`,
    base: `/`,
    extendRoutes(routes) {
      // routes.push(
      //   {
      //     name: 'xxx',
      //     path: '*',
      //     component: resolve(__dirname, 'layouts/xxx.vue')
      //   }
      // )
    },
    // middleware: ['auth']
  },
  /*
  ** Build configuration
  */
  build: {
    analyze: true,
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  serverMiddleware: [
    // API middleware
    // { path: '/api', handler: '~/api/index.js' }
    // '~/api/index.js'
  ],
  generate: {
    routes: [
      '/',
      '/products',
      '/products/industrial',
      '/products/industrial/ufo-led-highbay',
      '/products/industrial/square-led-highbay',
      '/products/industrial/linear-led-highbay',
      '/products/industrial/nova-flood-light',
      '/products/commercial',
      '/products/commercial/led-bulb',
      '/products/commercial/led-par-lamp',
      '/products/commercial/saber-linear-light',
      '/products/smart',
      '/products/smart/led-bulb',
      '/solution',
      '/solution/gymnasium',
      '/solution/manufacturing',
      '/solution/smart-home',
      '/solution/warehouse',
      '/about',
      // '/users',
      // '/users/111',
      // '/users/222',
      // '/users/333',

      // '/en',
      // '/en/about',
      // '/en/users',
      // '/en/users/111',
      // '/en/users/222',
      // '/en/users/333'
    ]
  }
}
