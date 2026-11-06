<script setup lang="ts">
const props = withDefaults(defineProps<{
  heading?: string
  layout?: 'grid' | 'stacked'
  items?: { quote?: string; author?: string; role?: string; avatar?: string; rating?: number }[]
}>(), {
  heading: 'Loved by teams',
  layout: 'grid',
  items: () => [
    { quote: 'We shipped our redesign in days, not months.', author: 'Alex Rivera', role: 'Head of Web', rating: 5 },
    { quote: 'Marketing finally stopped waiting on engineering.', author: 'Sam Chen', role: 'CMO', rating: 5 },
    { quote: 'The component registration model just works.', author: 'Priya Patel', role: 'Staff Engineer', rating: 4 },
  ],
})
const stars = (n?: number) => '★'.repeat(Math.max(0, Math.min(5, Math.round(n ?? 0)))) + '☆'.repeat(5 - Math.max(0, Math.min(5, Math.round(n ?? 0))))
</script>

<template>
  <section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">{{ props.heading }}</h2>
      <div :class="props.layout === 'grid' ? 'grid md:grid-cols-3 gap-8' : 'max-w-2xl mx-auto space-y-8'">
        <figure v-for="(t, i) in props.items" :key="i" class="bg-gray-50 rounded-xl p-6 shadow-sm">
          <div class="text-yellow-500 mb-3" :aria-label="`${t.rating ?? 0} out of 5`">{{ stars(t.rating) }}</div>
          <blockquote class="text-gray-700">“{{ t.quote }}”</blockquote>
          <figcaption class="mt-4 flex items-center gap-3">
            <img v-if="t.avatar" :src="t.avatar" :alt="t.author" class="w-10 h-10 rounded-full object-cover" />
            <div v-else class="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-semibold">
              {{ (t.author || '?').charAt(0) }}
            </div>
            <div>
              <div class="font-semibold text-gray-900">{{ t.author }}</div>
              <div class="text-sm text-gray-500">{{ t.role }}</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>
