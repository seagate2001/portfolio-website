// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Portfolio Tom Kellens',
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'icon', type: 'image/png', href: '/logoIcon.png' },
      ],
    },
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    'v-gsap-nuxt',
    '@nuxt/fonts'
  ],
  css: ['~/assets/css/tailwind.css'],
  fonts: {
    families: [
      { name: 'Roboto Flex', weights: [400, 500, 700, 900] },
      { name: 'Roboto Mono', weights: [400, 500, 700] },
    ],
  },
})