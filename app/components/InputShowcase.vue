<script setup lang="ts">
import { computed, useAttrs } from 'vue'

defineOptions({ inheritAttrs: false })
// Debug component: receives EVERY Builder input type and prints the resolved values.
// Use it to reproduce input-type related issues (serialization, defaults, showIf, localization...).
const attrs = useAttrs()
const shown = computed(() => {
  const { builderBlock, builderContext, attributes, ...rest } = { ...attrs } as Record<string, any>
  return rest
})
const blockMeta = computed(() => {
  const b = (attrs as any).builderBlock
  return b ? { id: b.id, component: b.component?.name, hasChildren: !!b.children?.length } : null
})
</script>

<template>
  <section class="max-w-4xl mx-auto px-4 py-8" data-testid="input-showcase">
    <h2 class="text-xl font-bold mb-2">{{ shown.label || 'Input Showcase' }}</h2>
    <p class="text-sm text-gray-500 mb-4">Resolved props as received by the component (type shown per value).</p>
    <pre class="bg-gray-900 text-green-300 text-xs rounded-lg p-4 overflow-auto max-h-[32rem]">{{ JSON.stringify({ blockMeta, props: shown }, null, 2) }}</pre>
  </section>
</template>
