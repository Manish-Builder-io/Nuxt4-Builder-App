<template>
  <section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {{ title || 'Our Features' }}
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          {{ subtitle || 'Discover what makes our platform the perfect choice for building your next website.' }}
        </p>
      </div>

      <!-- Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(card, index) in displayCards" 
          :key="index"
          class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
        >
          <!-- Card Image -->
          <div v-if="card.image" class="relative h-48 overflow-hidden">
            <img 
              :src="card.image" 
              :alt="card.title"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>

          <!-- Card Content -->
          <div class="p-6">
            <!-- Icon -->
            <div v-if="card.icon" class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
              <component 
                :is="card.icon" 
                class="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300"
              />
            </div>

            <!-- Title -->
            <h3 class="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
              {{ card.title }}
            </h3>

            <!-- Description -->
            <p class="text-gray-600 mb-4 leading-relaxed">
              {{ card.description }}
            </p>

            <!-- Features List -->
            <ul v-if="card.features" class="space-y-2 mb-6">
              <li 
                v-for="(feature, featureIndex) in card.features" 
                :key="featureIndex"
                class="flex items-center text-sm text-gray-600"
              >
                <svg class="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                {{ feature }}
              </li>
            </ul>

            <!-- CTA Button -->
            <div v-if="card.cta" class="flex items-center justify-between">
              <button class="text-blue-600 hover:text-blue-700 font-medium group-hover:underline transition-colors duration-300">
                {{ card.cta.text }}
              </button>
              <svg class="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </div>

            <!-- Badge -->
            <div v-if="card.badge" class="mt-4">
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                {{ card.badge }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Load More Button (if needed) -->
      <div v-if="showLoadMore" class="text-center mt-12">
        <button class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300">
          Load More Cards
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineProps, computed } from 'vue'

// Define props with default values
const props = defineProps({
  title: {
    type: String,
    default: 'Our Features'
  },
  subtitle: {
    type: String,
    default: 'Discover what makes our platform the perfect choice for building your next website.'
  },
  cards: {
    type: Array,
    default: () => []
  },
  showLoadMore: {
    type: Boolean,
    default: false
  }
})

// Default cards data if none provided
const defaultCards = [
  {
    title: 'Visual Editor',
    description: 'Drag and drop interface that makes website building intuitive and fun. No coding required.',
    icon: 'CodeIcon',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    features: [
      'Real-time preview',
      'Responsive design',
      'Custom components'
    ],
    cta: {
      text: 'Learn More'
    },
    badge: 'Popular'
  },
  {
    title: 'Templates Library',
    description: 'Choose from hundreds of professionally designed templates to get started quickly.',
    icon: 'TemplateIcon',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    features: [
      'Industry-specific designs',
      'Customizable layouts',
      'Mobile optimized'
    ],
    cta: {
      text: 'Browse Templates'
    }
  },
  {
    title: 'Hosting & Analytics',
    description: 'Built-in hosting with powerful analytics to track your website performance.',
    icon: 'ChartIcon',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    features: [
      '99.9% uptime guarantee',
      'Real-time analytics',
      'SEO optimization'
    ],
    cta: {
      text: 'View Analytics'
    },
    badge: 'New'
  }
]

// Use provided cards or default cards
const displayCards = computed(() => {
  return props.cards && props.cards.length > 0 ? props.cards : defaultCards
})

// Icon components (you can replace these with actual icon components)
const CodeIcon = {
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
    </svg>
  `
}

const TemplateIcon = {
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/>
    </svg>
  `
}

const ChartIcon = {
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
    </svg>
  `
}
</script>
