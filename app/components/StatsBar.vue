<script setup lang="ts">
const props = withDefaults(defineProps<{
  stats?: { value?: number; suffix?: string; label?: string }[]
  backgroundColor?: string
  textColor?: string
}>(), {
  stats: () => [
    { value: 10000, suffix: '+', label: 'Creators' },
    { value: 99.9, suffix: '%', label: 'Uptime' },
    { value: 150, suffix: '+', label: 'Integrations' },
  ],
  backgroundColor: '#111827',
  textColor: '#ffffff',
})
const fmt = (n?: number) => (n ?? 0).toLocaleString('en-US')
</script>

<template>
  <section :style="{ backgroundColor: props.backgroundColor, color: props.textColor }" class="py-12">
    <dl class="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      <div v-for="(s, i) in props.stats" :key="i">
        <dd class="text-4xl font-bold">{{ fmt(s.value) }}{{ s.suffix }}</dd>
        <dt class="mt-1 text-sm opacity-80">{{ s.label }}</dt>
      </div>
    </dl>
  </section>
</template>
