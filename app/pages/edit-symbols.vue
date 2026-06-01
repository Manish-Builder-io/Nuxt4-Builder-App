<!-- pages/edit-symbols.vue -->

<script setup>
import { Content, fetchOneEntry, isPreviewing } from '@builder.io/sdk-vue';
import { ref, onMounted } from 'vue';
import { registeredComponents } from '~/utils/builder-components';

const apiKey = "eb65b7b98b8741e590d4da657fce22a0";
const content = ref(null);
const canShowContent = ref(false);
const loading = ref(true);
const model = 'symbol';
const urlPath = '/edit-symbols';

onMounted(async () => {
  try {
    content.value = await fetchOneEntry({
      model,
      apiKey,
      userAttributes: {
        urlPath,
      },
      options: {
        cacheSeconds: 0,
        staleCacheSeconds: 0,
      },
    });
  } finally {
    canShowContent.value = !!content.value || isPreviewing(urlPath);
    loading.value = false;
  }
});
</script>

<template>
  <div v-if="loading" class="min-h-screen flex items-center justify-center">
    <p class="text-gray-500">Loading...</p>
  </div>
  <div v-else-if="canShowContent">
    <Content
      :api-key="apiKey"
      :model="model"
      :content="content"
      :customComponents="registeredComponents"
    />
  </div>
  <div v-else>
    <div class="min-h-screen flex items-center justify-center bg-gray-50">
      <div class="text-center">
        <h1 class="text-2xl font-bold text-gray-900 mb-4">Content Not Found</h1>
        <p class="text-gray-600 mb-4">No Builder.io content found for this page.</p>
        <p class="text-sm text-gray-500">Path: /edit-symbols</p>
      </div>
    </div>
  </div>
</template>
