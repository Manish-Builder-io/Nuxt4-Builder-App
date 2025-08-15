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
    
    <Footer 
      company-name="Test Company"
      company-description="This is a test company for component testing"
    />
  </div>
</template>

<script setup>
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
