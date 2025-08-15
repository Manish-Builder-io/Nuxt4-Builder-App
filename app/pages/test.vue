<template>
  <div>
    <h1 class="text-3xl font-bold text-center py-8">Component Test Page</h1>
    
    <Header 
      logo-text="Test Company"
      :show-cta="true"
      cta-text="Test Button"
    />
    
    <Hero 
      title="Test Hero Section"
      subtitle="This is a test of the Hero component"
      primary-button-text="Primary Action"
      secondary-button-text="Secondary Action"
    />
    
    <Cards 
      title="Test Cards"
      subtitle="Testing the Cards component"
      :cards="testCards"
    />
    
    <!-- Button Component Test Section -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">Button Component Test</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Variants -->
          <div class="space-y-4">
            <h3 class="text-lg font-semibold">Variants</h3>
            <div class="space-y-2">
              <Button text="Primary Button" variant="primary" />
              <Button text="Secondary Button" variant="secondary" />
              <Button text="Outline Button" variant="outline" />
              <Button text="Ghost Button" variant="ghost" />
              <Button text="Danger Button" variant="danger" />
              <Button text="Success Button" variant="success" />
            </div>
          </div>
          
          <!-- Sizes -->
          <div class="space-y-4">
            <h3 class="text-lg font-semibold">Sizes</h3>
            <div class="space-y-2">
              <Button text="Small" size="sm" />
              <Button text="Medium" size="md" />
              <Button text="Large" size="lg" />
              <Button text="Extra Large" size="xl" />
            </div>
          </div>
          
          <!-- States -->
          <div class="space-y-4">
            <h3 class="text-lg font-semibold">States</h3>
            <div class="space-y-2">
              <Button text="Normal Button" />
              <Button text="Disabled Button" :disabled="true" />
              <Button text="Loading Button" :loading="true" />
              <Button text="Full Width" :full-width="true" />
            </div>
          </div>
          
          <!-- Icons -->
          <div class="space-y-4">
            <h3 class="text-lg font-semibold">With Icons</h3>
            <div class="space-y-2">
              <Button text="Download" icon-before="DownloadIcon" />
              <Button text="Next" icon-after="ArrowRightIcon" />
              <Button text="Add Item" icon-before="PlusIcon" />
              <Button text="External Link" icon-after="ExternalLinkIcon" />
            </div>
          </div>
          
          <!-- Rounded -->
          <div class="space-y-4">
            <h3 class="text-lg font-semibold">Rounded</h3>
            <div class="space-y-2">
              <Button text="Rounded Button" :rounded="true" />
              <Button text="Rounded Primary" variant="primary" :rounded="true" />
            </div>
          </div>
          
          <!-- Interactive -->
          <div class="space-y-4">
            <h3 class="text-lg font-semibold">Interactive</h3>
            <div class="space-y-2">
              <Button text="Click Me!" @click="handleButtonClick" />
              <Button text="Count: {{ clickCount }}" variant="outline" @click="handleButtonClick" />
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <Footer 
      company-name="Test Company"
      company-description="This is a test company for component testing"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Interactive button functionality
const clickCount = ref(0)
const handleButtonClick = () => {
  clickCount.value++
  console.log('Button clicked! Count:', clickCount.value)
}

// Test data for the Cards component
const testCards = [
  {
    title: 'Test Card 1',
    description: 'This is a test card to verify the component works.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    features: [
      'Feature 1',
      'Feature 2',
      'Feature 3'
    ],
    cta: {
      text: 'Test CTA'
    },
    badge: 'Test'
  },
  {
    title: 'Test Card 2',
    description: 'Another test card to verify functionality.',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    features: [
      'Test feature A',
      'Test feature B'
    ],
    cta: {
      text: 'Learn More'
    }
  }
]
</script>
