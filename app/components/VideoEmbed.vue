<script setup lang="ts">
import { computed } from 'vue'
const props = withDefaults(defineProps<{
  url?: string
  aspectRatio?: string
  autoplay?: boolean
  caption?: string
}>(), { url: '', aspectRatio: '16/9', autoplay: false, caption: '' })

// Only allow https YouTube/Vimeo URLs to be embedded.
const embedUrl = computed(() => {
  try {
    const u = new URL(props.url)
    if (u.protocol !== 'https:') return null
    const auto = props.autoplay ? '?autoplay=1&mute=1' : ''
    if (/(^|\.)youtube\.com$/.test(u.hostname) && u.searchParams.get('v')) return `https://www.youtube.com/embed/${encodeURIComponent(u.searchParams.get('v')!)}${auto}`
    if (u.hostname === 'youtu.be') return `https://www.youtube.com/embed/${encodeURIComponent(u.pathname.slice(1))}${auto}`
    if (u.hostname === 'vimeo.com') return `https://player.vimeo.com/video/${encodeURIComponent(u.pathname.slice(1))}${props.autoplay ? '?autoplay=1&muted=1' : ''}`
  } catch { /* invalid URL */ }
  return null
})
</script>

<template>
  <figure class="max-w-4xl mx-auto px-4 py-8">
    <div class="w-full overflow-hidden rounded-xl bg-gray-100" :style="{ aspectRatio: props.aspectRatio }">
      <iframe v-if="embedUrl" :src="embedUrl" class="w-full h-full" title="Embedded video" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen loading="lazy" />
      <div v-else class="w-full h-full flex items-center justify-center text-gray-500 text-sm p-4 text-center">
        Paste an https YouTube or Vimeo URL
      </div>
    </div>
    <figcaption v-if="props.caption" class="mt-2 text-center text-sm text-gray-500">{{ props.caption }}</figcaption>
  </figure>
</template>
