<template>
    <div class="flex w-full h-full">
        <!-- Drawer só renderiza no mobile -->
        <AppSidebar />

        <!-- Sidebar fixo só aparece no desktop -->
        <aside class="hidden lg:flex fixed left-0 top-0 h-screen w-80 flex-col bg-[#4E56C0] z-10">
            <AppSidebarContent />
        </aside>

        <main class="flex flex-col w-full h-full">
            <AppNavbar class="w-full lg:pl-80" />
            
            <ScrollPanel style="width: 100%; height: calc(100vh - 56px);">
                <RouterView class="w-full"/>
            </ScrollPanel>
        </main>
  
    </div>
  </template>
  
  <script setup lang="ts">
  import AppSidebarContent from './AppSidebarContent.vue'
  import AppNavbar from './AppNavbar.vue'
  import AppSidebar from './AppSidebar.vue'
  import ScrollPanel from 'primevue/scrollpanel';
  import { RouterView } from 'vue-router'
  
  </script>