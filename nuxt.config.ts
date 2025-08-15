// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  
  // Ensure proper routing for Builder.io
  experimental: {
    payloadExtraction: false
  },
  
  // Debug mode for development
  debug: process.env.NODE_ENV === 'development',
  
  // Ensure components are auto-imported
  components: true,
  
  // Configure routing
  router: {
    options: {
      strict: false
    }
  }
})
