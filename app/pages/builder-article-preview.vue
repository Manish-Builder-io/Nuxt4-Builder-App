<!-- Set this URL as the Preview URL on your "articles" data model in Builder.io -->
<script setup lang="ts">
const { apiKey } = useBuilderConfig()
const model = 'articles'
const urlPath = '/builder-article-preview'

const { content, loading, canShowContent } = useBuilderDataModelPreview({ model, apiKey, urlPath })
</script>

<template>
  <div v-if="loading" class="min-h-screen flex items-center justify-center">
    <p class="text-gray-500">Loading…</p>
  </div>
  <ArticleDataModel v-else-if="canShowContent" :content="content" :api-key="apiKey" :model="model" />
  <div v-else class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="text-center">
      <h1 class="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
      <p class="text-gray-600 mb-4">No Builder.io article found for this preview URL.</p>
      <p class="text-sm text-gray-500">Path: {{ urlPath }}</p>
    </div>
  </div>
</template>
