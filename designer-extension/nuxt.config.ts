// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },

  ssr: true,
  ignore: ['server/**'],

  vite: {
    server: {
      hmr: {
        protocol: "wss"
      }
    },
  },
  routeRules:{
    "/api/**": {proxy:"https://webflow-asset-extention-ten.vercel.app"}
  }
})
