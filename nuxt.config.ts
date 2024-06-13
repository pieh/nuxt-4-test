// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  nitro: {
    compatibilityDate: "2024-05-07",
  },
  devtools: { enabled: true },
  routeRules: {
    "/demo-ssr": { ssr: true },
    "/demo-csr": { ssr: false },
    "/demo-prerender": { prerender: true },
    "/demo-swr-true": { swr: true },
    "/demo-swr-90": { swr: 90 },
    "/demo-isr-true": { isr: true },
    "/demo-isr-90": { isr: 90 },
  },
});
