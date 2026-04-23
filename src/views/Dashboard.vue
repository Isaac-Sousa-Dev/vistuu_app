<template>
  <div>  
    <!-- <AppSidebar v-model:visible="sidebarVisible" /> -->
    <div class="flex min-h-screen flex-col bg-gray-50" style="border-top-left-radius: 25px;">
      <main class="flex-1 p-4 md:p-6">
        <Breadcrumb class="mb-2 bg-transparent" :model="[{ label: 'Home', url: '/' }, { label: 'Dashboard', url: '/dashboard' }]">
            <template #item="{ item }">
                <a class="cursor-pointer" :href="item.url">
                    <span :class="item.icon">{{ item.label }}</span>
                </a>
            </template>
            <template #separator> / </template>
        </Breadcrumb>
        <div class="text-3xl mb-4">
          Dashboard
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <CardDashboard title="Produtos no estoque" value="320" icon="Package" iconColor="bg-[#ede9fe]" valueSize="text-3xl" iconTextColor="text-[#6a2bba]" />
          <CardDashboard title="Vendas concluídas" value="320" icon="CheckCircle" iconColor="bg-[#ecfdf5]" valueSize="text-3xl"  iconTextColor="text-[#059669]" />
          <CardDashboard title="Novos Pedidos" value="320" icon="ShoppingCart" iconColor="bg-[#fff8e7]" valueSize="text-3xl" iconTextColor="text-[#ff914d]" />
          <CardDashboard title="Saldo do mês" value="R$ 2.000,00" icon="Wallet" iconColor="bg-[#fdf1f8]" valueSize="text-lg md:text-3xl" iconTextColor="text-[#9f1239]" />
        </div>

        <div class="flex gap-10 mt-10 w-full">
          <div class="w-1/2">
            <div class="flex items-center justify-between">
              <div class="text-lg font-semibold flex items-center">
                <List class="w-5 h-5 mr-2" />
                Últimos pedidos
              </div>
    
              <div class="text-md text-gray-500">
                <div class="cursor-pointer font-semibold text-purple-700">Ver todos</div>
              </div>
            </div>

            <div class="text-sm text-gray-500">
              Pedidos recentes recebidos pelo catálogo.
            </div>

            <div class="mt-5 flex flex-col gap-1">
              <div class="bg-white shadow-sm cursor-pointer p-3 rounded-lg">
                <div class="flex items-center justify-between">
                  <div class="text-sm text-gray-500">
                    Pedido #123456
                  </div>
                  <div class="text-sm text-gray-500 font-semibold">
                    R$ 100,00
                  </div>
                </div>
              </div>

              <div class="bg-white p-3 rounded-lg">
                <div class="flex items-center justify-between">
                  <div class="text-sm text-gray-500">
                    Pedido #123456
                  </div>
                  <div class="text-sm text-gray-500 font-semibold">
                    R$ 100,00
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div class="w-1/2">
            <div class="flex items-center justify-between">
              <div class="text-lg font-semibold flex items-center">
                <List class="w-5 h-5 mr-2" />
                Produtos recentes
              </div>
    
              <div class="text-md text-gray-500">
                <div class="cursor-pointer font-semibold text-purple-700">Ver todos</div>
              </div>
            </div>

            <div class="text-sm text-gray-500">
              Últimos produtos adicionados ao catálogo.
            </div>

            <div class="mt-5 flex flex-col gap-1">
              <div class="bg-white p-3 rounded-lg">
                <div class="flex items-center justify-between">
                  <div class="text-sm text-gray-500">
                    Produto #123456
                  </div>
                </div>
              </div>

              <div class="bg-white p-3 rounded-lg">
                <div class="flex items-center justify-between">
                  <div class="text-sm text-gray-500">
                    Produto #123456
                  </div>
                </div>
              </div>
            </div>
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

<style scoped>

</style>
