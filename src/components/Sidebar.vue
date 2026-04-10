<script setup lang="ts">
import AppSidebar from '@/components/layout/AppSidebar.vue'

interface Props {
  storeName?: string
  visible?: boolean
}

const props = defineProps<Props>()

const emit = defineEmits<{
  'update:visible': [value: boolean]
}>()
</script>

<template>
  <AppSidebar
    :store-name="props.storeName"
    :visible="props.visible"
    @update:visible="emit('update:visible', $event)"
  />
</template>
