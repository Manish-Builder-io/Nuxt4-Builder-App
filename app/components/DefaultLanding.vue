<script setup lang="ts">
// Fallback landing page, composed ONLY of components that are registered with Builder
// (see utils/builder-components.ts). Props mirror the registered inputs' defaults.
</script>

<template>
  <div>
    <Header />
    <Hero />
    <StatsBar />
    <div id="features"><Cards /></div>
    <Testimonials />
    <PricingTable />
    <FaqAccordion />
    <CtaBanner />
    <Footer />
  </div>
</template>
