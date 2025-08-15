<template>
  <button
    :class="buttonClasses"
    :disabled="disabled"
    @click="handleClick"
  >
    <!-- Icon before text -->
    <component 
      v-if="iconBefore" 
      :is="iconBefore" 
      :class="iconClasses"
    />
    
    <!-- Button text -->
    <span v-if="text" :class="textClasses">
      {{ text }}
    </span>
    
    <!-- Icon after text -->
    <component 
      v-if="iconAfter" 
      :is="iconAfter" 
      :class="iconClasses"
    />
    
    <!-- Loading spinner -->
    <svg 
      v-if="loading" 
      class="animate-spin -ml-1 mr-2 h-4 w-4" 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24"
    >
      <circle 
        class="opacity-25" 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="currentColor" 
        stroke-width="4"
      ></circle>
      <path 
        class="opacity-75" 
        fill="currentColor" 
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  text: {
    type: String,
    default: 'Button'
  },
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'outline', 'ghost', 'danger', 'success'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg', 'xl'].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  fullWidth: {
    type: Boolean,
    default: false
  },
  iconBefore: {
    type: String,
    default: null
  },
  iconAfter: {
    type: String,
    default: null
  },
  rounded: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['click'])

// Base button classes
const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

// Size classes
const sizeClasses = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-base',
  xl: 'px-8 py-4 text-lg'
}

// Variant classes
const variantClasses = {
  primary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500 shadow-sm hover:shadow-md',
  secondary: 'bg-gray-600 hover:bg-gray-700 text-white focus:ring-gray-500 shadow-sm hover:shadow-md',
  outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500',
  ghost: 'text-blue-600 hover:bg-blue-50 focus:ring-blue-500',
  danger: 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500 shadow-sm hover:shadow-md',
  success: 'bg-green-600 hover:bg-green-700 text-white focus:ring-green-500 shadow-sm hover:shadow-md'
}

// Icon classes
const iconClasses = computed(() => {
  const baseIconClasses = 'h-4 w-4'
  const sizeIconMap = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5',
    xl: 'h-6 w-6'
  }
  return `${baseIconClasses} ${sizeIconMap[props.size]}`
})

// Text classes
const textClasses = computed(() => {
  return props.iconBefore || props.iconAfter ? 'ml-2' : ''
})

// Combined button classes
const buttonClasses = computed(() => {
  const classes = [
    baseClasses,
    sizeClasses[props.size],
    variantClasses[props.variant],
    props.fullWidth ? 'w-full' : '',
    props.rounded ? 'rounded-full' : 'rounded-lg'
  ]
  return classes.filter(Boolean).join(' ')
})

// Click handler
const handleClick = (event) => {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}

// Icon components (you can replace these with actual icon components)
const ArrowRightIcon = {
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
    </svg>
  `
}

const ArrowLeftIcon = {
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
    </svg>
  `
}

const PlusIcon = {
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
    </svg>
  `
}

const CheckIcon = {
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
    </svg>
  `
}

const DownloadIcon = {
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
    </svg>
  `
}

const ExternalLinkIcon = {
  template: `
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
    </svg>
  `
}
</script>
