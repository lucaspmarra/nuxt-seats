export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Bem cuidar - Eleições - 2022',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    __dangerouslyDisableSanitizers: ['script'],
    script: [
      {
        hid: 'libras-1',
        src: 'https://vlibras.gov.br/app/vlibras-plugin.js',
        body: true,
      },
      {
        hid: 'libras-2',
        innerHTML: `
  new window.VLibras.Widget('https://vlibras.gov.br/app');
`,
        type: 'text/javascript',
        charset: 'utf-8',
        body: true,
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/gtm',
  ],
  gtm: {
    id: 'G-X7LRE6RJ6M',
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    target: 'static',
  },
  server: {
    port: 8881,
    host: '0.0.0.0',
  },
  router: {
    base: '/seats-bem-cuidar',
  },
  generate: {
    fallback: true,
  },
}
