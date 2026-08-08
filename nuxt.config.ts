// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  ssr: false,
  nitro: {
    preset: 'vercel-static'
  },
  app: {
    head: {
      title: 'Simple MBTI — 4問でわかる性格診断',
      htmlAttrs: { lang: 'ja' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: '4つの質問に答えるだけで、あなたのMBTIタイプがわかるシンプルな性格診断サイトです。'
        }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@500;700&family=Zen+Maru+Gothic:wght@400;500;700&display=swap'
        }
      ]
    }
  }
})
