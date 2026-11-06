<script setup lang="ts">
import { ref } from 'vue'
const props = withDefaults(defineProps<{
  id?: string
  heading?: string
  allowMultipleOpen?: boolean
  items?: { question?: string; answer?: string }[]
}>(), {
  id: 'faq',
  heading: 'Frequently asked questions',
  allowMultipleOpen: false,
  items: () => [
    { question: 'What is a registered component?', answer: '<p>A code component exposed to the Builder visual editor with typed inputs.</p>' },
    { question: 'Where does the API key come from?', answer: '<p>From <code>NUXT_PUBLIC_BUILDER_API_KEY</code>.</p>' },
  ],
})
const open = ref<Set<number>>(new Set())
function toggle(i: number) {
  const next = new Set(props.allowMultipleOpen ? open.value : [])
  open.value.has(i) ? next.delete(i) : next.add(i)
  open.value = next
}
</script>

<template>
  <section :id="props.id" class="py-16 bg-white">
    <div class="max-w-3xl mx-auto px-4">
      <h2 class="text-3xl font-bold text-center text-gray-900 mb-10">{{ props.heading }}</h2>
      <div class="divide-y divide-gray-200 border-y border-gray-200">
        <div v-for="(item, i) in props.items" :key="i">
          <button type="button" class="w-full flex justify-between items-center py-4 text-left font-medium text-gray-900"
                  :aria-expanded="open.has(i)" @click="toggle(i)">
            {{ item.question }}
            <span aria-hidden="true">{{ open.has(i) ? '−' : '+' }}</span>
          </button>
          <!-- richText input is trusted editor-authored HTML -->
          <div v-if="open.has(i)" class="pb-4 text-gray-600 prose" v-html="item.answer" />
        </div>
      </div>
    </div>
  </section>
</template>
