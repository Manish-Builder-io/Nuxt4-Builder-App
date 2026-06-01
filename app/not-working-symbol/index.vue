<script setup>
import { Content, fetchOneEntry, isPreviewing } from '@builder.io/sdk-vue';
import { ref, onMounted } from 'vue';
import { registeredComponents } from '~/utils/builder-components';

const apiKey = 'eb65b7b98b8741e590d4da657fce22a0';
const model = 'symbol';
const urlPath = '/builder/symbol';

const content = ref(null);
const canShowContent = ref(false);
const loading = ref(true);

onMounted(async () => {
  try {
    content.value = await fetchOneEntry({
      model,
      apiKey,
      userAttributes: { urlPath },
      options: {
        enrich: true,
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
  <div v-if="loading">Loading...</div>
  <div v-else-if="canShowContent">
    <Content
      :api-key="apiKey"
      :model="model"
      :content="content"
      :custom-components="registeredComponents"
    />
  </div>
  <div v-else>Content not found...</div>
</template>
