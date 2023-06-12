export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: true,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=2, user-scalable=no' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        src: "/scripts/wally.js",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/router-extras'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  trailingSlash: true,
  router: {
    routes: [
      {path: '"/rules/A_1.1.1"', component: '"/rules/A_1.1.1"'},
      {path: '"/rules/A_1.2.1"', component: '"/rules/A_1.2.1"'},
      {path: '"/rules/A_1.2.2"', component: '"/rules/A_1.2.2"'},
      {path: '"/rules/A_1.3.1"', component: '"/rules/A_1.3.1"'},
      {path: '"/rules/A_2.1.1"', component: '"/rules/A_2.1.1"'},
      {path: '"/rules/A_2.4.1"', component: '"/rules/A_2.4.1"'},
      {path: '"/rules/A_2.4.2"', component: '"/rules/A_2.4.2"'},
      {path: '"/rules/A_2.5.1"', component: '"/rules/A_2.5.1"'},
      {path: '"/rules/A_2.5.2"', component: '"/rules/A_2.5.2"'},
      {path: '"/rules/A_2.5.3"', component: '"/rules/A_2.5.3"'},
      {path: '"/rules/A_3.2.1"', component: '"/rules/A_3.2.1"'},
      {path: '"/rules/A_3.2.2"', component: '"/rules/A_3.2.2"'},
      {path: '"/rules/A_3.3.1"', component: '"/rules/A_3.3.1"'},
      {path: '"/rules/A_3.3.2"', component: '"/rules/A_3.3.2"'},
      {path: '"/rules/A_4.1.1"', component: '"/rules/A_4.1.1"'},
      {path: '"/rules/A_4.1.2"', component: '"/rules/A_4.1.2"'},
      {path: '"/rules/AA_1.2.4"', component: '"/rules/AA_1.2.4"'},
      {path: '"/rules/AA_1.2.5"', component: '"/rules/AA_1.2.5"'},
      {path: '"/rules/AA_1.3.5"', component: '"/rules/AA_1.3.5"'},
      {path: '"/rules/AA_1.4.10"', component: '"/rules/AA_1.4.10"'},
      {path: '"/rules/AA_1.4.12"', component: '"/rules/AA_1.4.12"'},
      {path: '"/rules/AA_2.4.5"', component: '"/rules/AA_2.4.5"'},
      {path: '"/rules/AAA_1.2.6"', component: '"/rules/AAA_1.2.6"'},
      {path: '"/rules/AAA_1.2.7"', component: '"/rules/AAA_1.2.7"'},
      {path: '"/rules/AAA_1.2.8"', component: '"/rules/AAA_1.2.8"'},
      {path: '"/rules/AAA_1.2.9"', component: '"/rules/AAA_1.2.9"'},
      {path: '"/rules/AAA_1.3.6"', component: '"/rules/AAA_1.3.6"'},
      {path: '"/rules/AAA_1.4.7"', component: '"/rules/AAA_1.4.7"'},
      {path: '"/rules/AAA_2.4.8"', component: '"/rules/AAA_2.4.8"'},
      {path: '"/rules/AAA_3.2.5"', component: '"/rules/AAA_3.2.5"'},
      {path: '"/rules/AAA_3.3.5"', component: '"/rules/AAA_3.3.5"'},
      {path: '"/rules/AAA_3.3.6"', component: '"/rules/AAA_3.3.6"'}
    ]
  }
}
