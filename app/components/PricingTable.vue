<script setup lang="ts">
interface Plan {
  name?: string
  price?: number
  highlighted?: boolean
  features?: { text?: string }[]
  ctaText?: string
  ctaUrl?: string
}
const props = withDefaults(defineProps<{
  id?: string
  heading?: string
  currency?: string
  billingPeriod?: string
  plans?: Plan[]
}>(), {
  id: 'pricing',
  heading: 'Simple pricing',
  currency: 'USD',
  billingPeriod: 'month',
  plans: () => [
    { name: 'Starter', price: 0, features: [{ text: '1 project' }, { text: 'Community support' }], ctaText: 'Start free', ctaUrl: '#' },
    { name: 'Pro', price: 49, highlighted: true, features: [{ text: 'Unlimited projects' }, { text: 'Priority support' }, { text: 'Custom components' }], ctaText: 'Go Pro', ctaUrl: '#' },
    { name: 'Enterprise', price: 299, features: [{ text: 'SSO' }, { text: 'SLA' }, { text: 'Dedicated CSM' }], ctaText: 'Contact sales', ctaUrl: '#' },
  ],
})
const money = (n?: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: props.currency, maximumFractionDigits: 0 }).format(n ?? 0)
</script>

<template>
  <section :id="props.id" class="py-16 bg-gray-50">
    <div class="max-w-6xl mx-auto px-4">
      <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">{{ props.heading }}</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="(p, i) in props.plans"
          :key="i"
          class="rounded-2xl p-8 bg-white shadow"
          :class="p.highlighted ? 'ring-2 ring-blue-600 shadow-xl' : ''"
        >
          <h3 class="text-xl font-semibold text-gray-900">{{ p.name }}</h3>
          <p class="mt-4"><span class="text-4xl font-bold">{{ money(p.price) }}</span><span class="text-gray-500"> / {{ props.billingPeriod }}</span></p>
          <ul class="mt-6 space-y-2 text-gray-600">
            <li v-for="(f, fi) in p.features" :key="fi">✓ {{ f.text }}</li>
          </ul>
          <a :href="p.ctaUrl || '#'" class="mt-8 block text-center rounded-lg px-4 py-3 font-medium"
             :class="p.highlighted ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'">
            {{ p.ctaText || 'Choose plan' }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
