<!-- pages/[...app].vue -->

<script setup>
import { Content, fetchOneEntry, isPreviewing } from '@builder.io/sdk-vue';
import { ref } from 'vue';
import { registeredComponents } from '~/utils/builder-components';

const route = useRoute();

// TO DO: Add your Public API Key here
const apiKey = "db60bf3db7fa4db7be81ef05b72bd720";
const canShowContent = ref(false);
const model = 'page';

// Get the path, ensuring root path is handled correctly
const urlPath = route.path === '/' ? '/' : route.path;

const { data: content } = await useAsyncData('builderData', () =>
  fetchOneEntry({
    model,
    apiKey,
    userAttributes: {
      urlPath: urlPath,
    },
  })
);

// Check if we should show content
canShowContent.value = content.value ? true : isPreviewing(urlPath);

// Method to get registered components
const getRegisteredComponents = () => {
  return registeredComponents;
};

// Debug logging
console.log('Route path:', route.path);
console.log('URL path:', urlPath);
console.log('Content found:', !!content.value);
console.log('Can show content:', canShowContent.value);
console.log('Is previewing:', isPreviewing(urlPath));
</script>

<template>
  <div v-if="canShowContent">
    <Content 
      :api-key="apiKey" 
      :model="model" 
      :content="content" 
      :customComponents="getRegisteredComponents()"
    />
  </div>
  <div v-else>
    <div class="min-h-screen flex items-center justify-center bg-gray-50">
      <div class="text-center">
        <h1 class="text-2xl font-bold text-gray-900 mb-4">Content Not Found</h1>
        <p class="text-gray-600 mb-4">No Builder.io content found for this page.</p>
        <p class="text-sm text-gray-500">Path: {{ route.path }}</p>
        <p class="text-sm text-gray-500">URL Path: {{ urlPath }}</p>
        <p class="text-sm text-gray-500">Content: {{ content ? 'Found' : 'Not found' }}</p>
        <p class="text-sm text-gray-500">Preview Mode: {{ isPreviewing(urlPath) ? 'Yes' : 'No' }}</p>
      </div>
    </div>
  </div>
</template>