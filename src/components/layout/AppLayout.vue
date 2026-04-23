<template>
    <div class="flex w-full h-full">
        <!-- Drawer só renderiza no mobile -->
        <AppSidebar />

        <!-- Sidebar fixo só aparece no desktop -->
        <aside class="hidden lg:flex fixed left-0 top-0 h-screen w-80 flex-col bg-[#ede9fe]">
            <AppSidebarContent />
        </aside>

        <main class="flex flex-col w-full h-full">
            <AppNavbar class="w-full lg:pl-80" />
            <RouterView class="w-full lg:pl-80"/>
        </main>
  
    </div>
  </template>
  
  <script setup lang="ts">
  import AppSidebarContent from './AppSidebarContent.vue'
  import AppNavbar from './AppNavbar.vue'
  import AppSidebar from './AppSidebar.vue'
  import { RouterView } from 'vue-router'
  
  </script>