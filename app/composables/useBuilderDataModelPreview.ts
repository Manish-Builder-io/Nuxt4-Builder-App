import {
  fetchOneEntry,
  getBuilderSearchParams,
  isPreviewing,
  subscribeToEditor,
} from '@builder.io/sdk-vue'
import { ref, onMounted, onUnmounted } from 'vue'

type BuilderEntry = Awaited<ReturnType<typeof fetchOneEntry>>

interface UseBuilderDataModelPreviewOptions {
  model: string
  apiKey: string
  urlPath: string
  userAttributes?: Record<string, string>
}

export function useBuilderDataModelPreview({
  model,
  apiKey,
  urlPath,
  userAttributes = {},
}: UseBuilderDataModelPreviewOptions) {
  const content = ref<BuilderEntry>(null)
  const loading = ref(true)
  const canShowContent = ref(false)

  let unsubscribe: (() => void) | undefined

  onMounted(async () => {
    try {
      content.value = await fetchOneEntry({
        model,
        apiKey,
        userAttributes: { urlPath, ...userAttributes },
        options: {
          ...getBuilderSearchParams(new URL(location.href).searchParams),
          cacheSeconds: 0,
          staleCacheSeconds: 0,
          enrich: true,
        },
      })
    } finally {
      canShowContent.value = !!content.value || isPreviewing(urlPath)
      loading.value = false
    }

    unsubscribe = subscribeToEditor({
      model,
      apiKey,
      callback: (data) => {
        console.log('[subscribeToEditor] relatedArticle:', JSON.stringify(data?.data?.relatedArticle))
        content.value = data
      },
    })
  })

  onUnmounted(() => {
    unsubscribe?.()
  })

  return { content, loading, canShowContent }
}
