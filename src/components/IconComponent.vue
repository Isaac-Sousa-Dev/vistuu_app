<template>
    <component
      :is="iconComponent"
      :size="size"
      :stroke-width="strokeWidth"
      :color="color"
      v-bind="$attrs"
    />
</template>
  
<script setup>
  import { computed } from 'vue'
  import * as LucideIcons from '@lucide/vue'
  
  const props = defineProps({
    name: {
      type: String,
      required: true,
    },
    size: {
      type: [Number, String],
      default: 24,
    },
    strokeWidth: {
      type: [Number, String],
      default: 2,
    },
    color: {
      type: String,
      default: 'currentColor',
    },
  })
  
  const iconComponent = computed(() => {
    return LucideIcons[props.name] ?? null
  })
</script>