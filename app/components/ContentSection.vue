<script setup lang="ts">
import { Blocks } from '@builder.io/sdk-vue'

const props = withDefaults(defineProps<{
  builderBlock?: any
  builderContext?: any
  id?: string
  paddingY?: number
  maxWidth?: 'narrow' | 'normal' | 'wide' | 'full'
  backgroundColor?: string
}>(), { paddingY: 64, maxWidth: 'normal', backgroundColor: 'transparent' })

const widths = { narrow: '48rem', normal: '72rem', wide: '90rem', full: '100%' }
</script>

<template>
  <section :id="props.id" :style="{ paddingTop: `${props.paddingY}px`, paddingBottom: `${props.paddingY}px`, backgroundColor: props.backgroundColor }">
    <div class="mx-auto px-4" :style="{ maxWidth: widths[props.maxWidth] }">
      <!-- Slot for child blocks dropped in the Builder editor -->
      <Blocks
        v-if="props.builderBlock"
        :blocks="props.builderBlock.children"
        :parent="props.builderBlock.id"
        path="children"
        :context="props.builderContext"
        :registered-components="props.builderContext?.registeredComponents"
      />
    </div>
  </section>
</template>
