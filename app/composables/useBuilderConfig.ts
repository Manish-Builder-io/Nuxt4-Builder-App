/**
 * Single source of truth for Builder.io settings.
 * The API key is read from NUXT_BUILDER_API_KEY via Nuxt runtimeConfig.
 */
export function useBuilderConfig() {
  const config = useRuntimeConfig()
  const apiKey = config.public.builderApiKey as string
  const cacheSeconds = Number(config.public.builderCacheSeconds ?? 0)

  if (!apiKey) {
    console.error(
      '[builder] Missing API key. Set NUXT_BUILDER_API_KEY in your environment (see .env.example).',
    )
  }

  return {
    apiKey,
    // Top-level cacheSeconds: 0 is ignored by the SDK (falsy); pass it via `options` instead.
    cacheOptions: { cacheSeconds, staleCacheSeconds: cacheSeconds },
  }
}
