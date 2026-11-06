<script setup lang="ts">
const props = withDefaults(defineProps<{
  heading?: string
  body?: string
  buttonText?: string
  buttonUrl?: string
  openInNewTab?: boolean
  align?: 'left' | 'center' | 'right'
  backgroundColor?: string
  textColor?: string
  backgroundImage?: string
}>(), {
  heading: 'Ready to build?',
  body: 'Start composing pages from your own components today.',
  buttonText: 'Get started',
  buttonUrl: '#',
  openInNewTab: false,
  align: 'center',
  backgroundColor: '#2563eb',
  textColor: '#ffffff',
  backgroundImage: '',
})
const alignClass = { left: 'text-left', center: 'text-center', right: 'text-right' }
</script>

<template>
  <section
    class="py-20 px-4 bg-cover bg-center"
    :class="alignClass[props.align]"
    :style="{ backgroundColor: props.backgroundColor, color: props.textColor, backgroundImage: props.backgroundImage ? `url(${props.backgroundImage})` : undefined }"
  >
    <div class="max-w-3xl mx-auto" :class="props.align === 'center' ? '' : props.align === 'right' ? 'ml-auto mr-0' : 'mr-auto ml-0'">
      <h2 class="text-3xl md:text-4xl font-bold">{{ props.heading }}</h2>
      <p class="mt-4 text-lg opacity-90 whitespace-pre-line">{{ props.body }}</p>
      <a :href="props.buttonUrl" :target="props.openInNewTab ? '_blank' : undefined" :rel="props.openInNewTab ? 'noopener noreferrer' : undefined"
         class="inline-block mt-8 bg-white text-gray-900 font-semibold rounded-lg px-6 py-3 hover:bg-gray-100">
        {{ props.buttonText }}
      </a>
    </div>
  </section>
</template>
