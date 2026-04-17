<template>
  <div class="min-h-screen bg-gray-100">
    <AppSidebar v-model:visible="sidebarVisible" />
    <div class="flex min-h-screen flex-col md:pl-64">
      <AppNavbar @toggle-sidebar="handleToggleSidebar" />
      <main class="flex-1 p-4 md:p-6">
        <Breadcrumb class="mb-2" :model="[{ label: 'Home', url: '/' }, { label: 'Dashboard', url: '/dashboard' }]">
            <template #item="{ item }">
                <a class="cursor-pointer" :href="item.url">
                    <span :class="item.icon"></span>
                </a>
            </template>
            <template #separator> / </template>
        </Breadcrumb>
        <div class="text-3xl font-bold mb-4">
          Dashboard
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <CardDashboard title="Produtos no estoque" value="320" icon="Package" iconColor="bg-gray-500" valueSize="text-3xl" />
          <CardDashboard title="Vendas concluídas" value="320" icon="CheckCircle" iconColor="bg-green-500" valueSize="text-3xl" />
          <CardDashboard title="Novos Pedidos" value="320" icon="ShoppingCart" iconColor="bg-blue-500" valueSize="text-3xl" />
          <CardDashboard title="Saldo do mês" value="R$ 2.000,00" icon="Wallet" iconColor="bg-yellow-500" valueSize="text-lg" />
        </div>

        <div class="mt-5">
          <div class="flex items-center justify-between">
            <div class="text-xl font-semibold flex items-center">
              <List class="w-6 h-6 mr-2" />
              Últimos pedidos
            </div>
  
            <div class="text-md text-gray-500">
              <div class="cursor-pointer">Ver todos</div>
            </div>
          </div>

          <div class="text-sm text-gray-500">
            Pedidos recentes recebidos pelo catálogo.
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AppNavbar from '@/components/layout/AppNavbar.vue'
import AppSidebar from '@/components/layout/AppSidebar.vue'
import Breadcrumb from 'primevue/breadcrumb';

import CardDashboard from '@/components/CardDashboard.vue';
import { List } from '@lucide/vue';

const sidebarVisible = ref(false)

function handleToggleSidebar() {
  sidebarVisible.value = !sidebarVisible.value
}
</script>

<style scoped></style>
