// https://nuxt.com/docs/api/configuration/nuxt-config
// Load .env before reading it below (nuxt.config is evaluated before Nuxt loads dotenv).
try { process.loadEnvFile('.env') } catch { /* no .env file (e.g. on Vercel) */ }

// Vercel doesn't allow "PUBLIC" in env var names, so NUXT_BUILDER_API_KEY is supported too.
// The app is a client-side SPA, so the key is read at build time and exposed as public config
// (Builder public API keys are designed to be shipped to the browser).
const builderApiKey = process.env.NUXT_PUBLIC_BUILDER_API_KEY || process.env.NUXT_BUILDER_API_KEY
const builderCacheSeconds = Number(
  process.env.NUXT_PUBLIC_BUILDER_CACHE_SECONDS ?? process.env.NUXT_BUILDER_CACHE_SECONDS ?? 0,
)

if (!builderApiKey) {
  console.warn(
    '[builder] NUXT_BUILDER_API_KEY (or NUXT_PUBLIC_BUILDER_API_KEY) is not set. Copy .env.example to .env and add your Builder public API key.',
  )
}

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: process.env.NODE_ENV !== 'production' },
  modules: ['@nuxtjs/tailwindcss'],

  // Client-side rendered SPA (keeps Builder repros free of SSR hydration noise)
  ssr: false,

  // All Builder credentials come from the environment — never hardcode keys.
  runtimeConfig: {
    public: {
      builderApiKey: builderApiKey ?? '',
      builderCacheSeconds,
    },
  },

  experimental: {
    payloadExtraction: false,
  },

  debug: process.env.NODE_ENV === 'development',

  components: true,

  router: {
    options: {
      strict: false,
    },
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Builder.io Repro App',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Nuxt 4 + Builder.io app for reproducing Builder.io issues.' },
      ],
    },
  },

  routeRules: {
    // Builder's visual editor loads this app in an iframe, so only allow framing by Builder.
    '/**': {
      headers: {
        'X-Content-Type-Options': 'nosniff',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'Content-Security-Policy': "frame-ancestors 'self' https://builder.io https://*.builder.io",
        'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
      },
    },
  },
})
