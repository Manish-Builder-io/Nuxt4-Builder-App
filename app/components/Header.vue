<template>
  <header class="bg-white shadow-sm border-b border-gray-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <a href="/" class="flex items-center">
            <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-lg">{{ props.logoText.charAt(0) }}</span>
            </div>
            <span class="ml-2 text-xl font-bold text-gray-900">{{ props.logoText }}</span>
          </a>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex space-x-8" aria-label="Primary">
          <a
            v-for="(link, i) in links"
            :key="i"
            :href="link.url"
            class="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
          >
            {{ link.label }}
          </a>
        </nav>

        <!-- CTA Button -->
        <div v-if="props.showCTA" class="hidden md:flex items-center">
          <a
            :href="props.ctaUrl"
            class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            {{ props.ctaText }}
          </a>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            type="button"
            class="text-gray-700 hover:text-blue-600 p-2"
            :aria-expanded="isMobileMenuOpen"
            aria-label="Toggle menu"
            @click="isMobileMenuOpen = !isMobileMenuOpen"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div v-if="isMobileMenuOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
          <a
            v-for="(link, i) in links"
            :key="i"
            :href="link.url"
            class="block text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium"
            @click="isMobileMenuOpen = false"
          >
            {{ link.label }}
          </a>
          <div v-if="props.showCTA" class="pt-4">
            <a
              :href="props.ctaUrl"
              class="block text-center w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              {{ props.ctaText }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  logoText: { type: String, default: 'Builder.io' },
  showCTA: { type: Boolean, default: true },
  ctaText: { type: String, default: 'Get Started' },
  ctaUrl: { type: String, default: '#' },
  navLinks: { type: Array, default: () => [] },
})

const defaultLinks = [
  { label: 'Home', url: '/' },
  { label: 'Features', url: '#features' },
  { label: 'Pricing', url: '#pricing' },
  { label: 'FAQ', url: '#faq' },
]

const links = computed(() => (props.navLinks?.length ? props.navLinks : defaultLinks))
const isMobileMenuOpen = ref(false)
</script>
