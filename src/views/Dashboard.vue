<template>
  <div>
    <AppNavbar @toggle-sidebar="handleToggleSidebar" />
  </div>
</template>

<script setup lang="ts">
import AppNavbar from '@/components/layout/AppNavbar.vue'

function handleToggleSidebar() {
  // TODO: integrar com Sidebar quando existir
}
</script>

<style scoped></style>
