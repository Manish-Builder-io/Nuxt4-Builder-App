<!-- Catch-all: renders the Builder "page" entry matching the URL; "/" falls back to the default landing page -->
<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <BuilderPage model="page">
    <template #fallback="{ error }">
      <DefaultLanding v-if="route.path === '/'" />
      <div v-else class="min-h-screen flex items-center justify-center bg-gray-50">
        <div class="text-center px-4">
          <h1 class="text-2xl font-bold text-gray-900 mb-4">Content Not Found</h1>
          <p class="text-gray-600 mb-2">No Builder.io content found for this page.</p>
          <p class="text-sm text-gray-500">Path: {{ route.path }}</p>
          <p v-if="error" class="mt-2 text-sm text-red-600">{{ error }}</p>
        </div>
      </div>
    </template>
  </BuilderPage>
</template>
