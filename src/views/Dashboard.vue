<template>
  <div class="min-h-screen bg-gray-100">
    <AppSidebar v-model:visible="sidebarVisible" />
    <div class="flex min-h-screen flex-col md:pl-64">
      <AppNavbar @toggle-sidebar="handleToggleSidebar" />
      <main class="flex-1 p-4 md:p-6">
        <p class="text-gray-600">Conteúdo do painel.</p>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AppNavbar from '@/components/layout/AppNavbar.vue'
import AppSidebar from '@/components/layout/AppSidebar.vue'

const sidebarVisible = ref(false)

function handleToggleSidebar() {
  sidebarVisible.value = !sidebarVisible.value
}
</script>

<style scoped></style>
