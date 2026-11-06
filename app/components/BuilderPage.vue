<script setup lang="ts">
import {
  Content,
  fetchOneEntry,
  getBuilderSearchParams,
  isEditing,
  isPreviewing,
} from '@builder.io/sdk-vue'
import { registeredComponents } from '~/utils/builder-components'

const props = withDefaults(
  defineProps<{
    /** Builder model name, e.g. "page", "landing-page", "symbol" */
    model?: string
    /** URL path used for targeting. Defaults to the current route path. */
    urlPath?: string
    /** Pass enrich: true to resolve references/symbols inline */
    enrich?: boolean
  }>(),
  { model: 'page', urlPath: undefined, enrich: false },
)

const route = useRoute()
const { apiKey, cacheOptions } = useBuilderConfig()

const content = ref<any>(null)
const loading = ref(true)
const error = ref<string | null>(null)
const canShowContent = ref(false)
const targetPath = computed(() => props.urlPath ?? route.path)

async function load() {
  loading.value = true
  error.value = null
  try {
    content.value = await fetchOneEntry({
      model: props.model,
      apiKey,
      userAttributes: { urlPath: targetPath.value },
      options: {
        ...getBuilderSearchParams(route.query as any),
        ...cacheOptions,
        ...(props.enrich ? { enrich: true } : {}),
      },
    })
  } catch (e: any) {
    console.error('[builder] fetchOneEntry failed', e)
    error.value = e?.message ?? 'Failed to load content'
    content.value = null
  } finally {
    canShowContent.value = !!content.value || isPreviewing() || isEditing()
    loading.value = false
  }
}

onMounted(load)
watch(() => [targetPath.value, props.model], load)
</script>

<template>
  <div v-if="loading" class="min-h-screen flex items-center justify-center">
    <p class="text-gray-500" role="status">Loading…</p>
  </div>
  <Content
    v-else-if="canShowContent"
    :api-key="apiKey"
    :model="model"
    :content="content"
    :custom-components="registeredComponents"
  />
  <slot v-else name="fallback" :error="error" :path="targetPath">
    <div class="min-h-screen flex items-center justify-center bg-gray-50">
      <div class="text-center px-4">
        <h1 class="text-2xl font-bold text-gray-900 mb-4">Content Not Found</h1>
        <p class="text-gray-600 mb-2">
          No published Builder.io <code>{{ model }}</code> entry matches this URL.
        </p>
        <p class="text-sm text-gray-500">Path: {{ targetPath }}</p>
        <p v-if="error" class="mt-2 text-sm text-red-600">{{ error }}</p>
      </div>
    </div>
  </slot>
</template>
