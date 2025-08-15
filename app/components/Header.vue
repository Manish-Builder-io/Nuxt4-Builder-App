<template>
  <header class="bg-white shadow-sm border-b border-gray-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <NuxtLink to="/" class="flex items-center">
            <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-lg">B</span>
            </div>
            <span class="ml-2 text-xl font-bold text-gray-900">{{ props.logoText }}</span>
          </NuxtLink>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex space-x-8">
          <NuxtLink 
            to="/" 
            class="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
            active-class="text-blue-600"
          >
            Home
          </NuxtLink>
          <NuxtLink 
            to="/about" 
            class="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
            active-class="text-blue-600"
          >
            About
          </NuxtLink>
          <NuxtLink 
            to="/services" 
            class="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
            active-class="text-blue-600"
          >
            Services
          </NuxtLink>
          <NuxtLink 
            to="/contact" 
            class="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
            active-class="text-blue-600"
          >
            Contact
          </NuxtLink>
        </nav>

        <!-- CTA Button -->
        <div v-if="props.showCTA" class="hidden md:flex items-center">
          <button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            {{ props.ctaText }}
          </button>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button 
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="text-gray-700 hover:text-blue-600 p-2"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div v-if="isMobileMenuOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
          <NuxtLink 
            to="/" 
            class="block text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium"
            active-class="text-blue-600"
            @click="isMobileMenuOpen = false"
          >
            Home
          </NuxtLink>
          <NuxtLink 
            to="/about" 
            class="block text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium"
            active-class="text-blue-600"
            @click="isMobileMenuOpen = false"
          >
            About
          </NuxtLink>
          <NuxtLink 
            to="/services" 
            class="block text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium"
            active-class="text-blue-600"
            @click="isMobileMenuOpen = false"
          >
            Services
          </NuxtLink>
          <NuxtLink 
            to="/contact" 
            class="block text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium"
            active-class="text-blue-600"
            @click="isMobileMenuOpen = false"
          >
            Contact
          </NuxtLink>
          <div v-if="props.showCTA" class="pt-4">
            <button class="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              {{ props.ctaText }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  logoText: {
    type: String,
    default: 'Builder.io'
  },
  showCTA: {
    type: Boolean,
    default: true
  },
  ctaText: {
    type: String,
    default: 'Get Started'
  }
})

const isMobileMenuOpen = ref(false)
</script>
