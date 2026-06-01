<script setup>
import { Content, fetchOneEntry, isPreviewing } from '@builder.io/sdk-vue';
import { ref, onMounted } from 'vue';
import { registeredComponents } from '~/utils/builder-components';

const route = useRoute();
const apiKey = 'eb65b7b98b8741e590d4da657fce22a0';
const model = 'article';
const content = ref(null);
const canShowContent = ref(false);
const loading = ref(true);

onMounted(async () => {
  const slug = route.params.slug;
  const urlPath = '/blog/' + (Array.isArray(slug) ? slug.join('/') : slug);
  try {
    content.value = await fetchOneEntry({
      model,
      apiKey,
      userAttributes: { urlPath },
      options: { cacheSeconds: 0, staleCacheSeconds: 0 },
    });
  } finally {
    canShowContent.value = !!content.value || isPreviewing(urlPath);
    loading.value = false;
  }
});
</script>

<template>
  <div>
    <div v-if="loading" class="flex items-center justify-center min-h-screen">
      <p class="text-gray-500">Loading...</p>
    </div>
    <template v-else-if="canShowContent">
      <Content
        :api-key="apiKey"
        :model="model"
        :content="content"
        :customComponents="registeredComponents"
      />
    </template>
    <div v-else class="flex items-center justify-center min-h-screen">
      <p class="text-gray-500">Article Not Found</p>
    </div>
  </div>
</template>
