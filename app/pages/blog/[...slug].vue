<script setup>
const route = useRoute()
const apiKey = 'eb65b7b98b8741e590d4da657fce22a0'
const model = 'article'

const slug = route.params.slug
const urlPath = '/blog/' + (Array.isArray(slug) ? slug.join('/') : slug)

const { content, loading, canShowContent } = useBuilderDataModelPreview({
  model,
  apiKey,
  urlPath,
})
</script>

<template>
  <div>
    <div v-if="loading" class="flex items-center justify-center min-h-screen">
      <p class="text-gray-500">Loading...</p>
    </div>
    <ArticleDataModel
      v-else-if="canShowContent"
      :content="content"
      :api-key="apiKey"
      :model="model"
    />
    <div v-else class="flex items-center justify-center min-h-screen">
      <p class="text-gray-500">Article Not Found</p>
    </div>
  </div>
</template>
