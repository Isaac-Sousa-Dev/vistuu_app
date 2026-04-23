// composables/useLayout.ts
import { ref, computed } from 'vue'

const sidebarOpen = ref(false)

const sidebarSections = ref([
    {
        title: 'INÍCIO',
        items: [{ label: 'Dashboard', icon: 'fa-solid fa-gauge-simple-high', routeName: 'Home' }],
    },
    {
        title: 'ATENDIMENTO',
        items: [
            {
            label: 'Agente IA',
            icon: 'fa-solid fa-robot',
            badge: 'Em breve',
            disabled: true,
            },
        ],
    },
    {
        title: 'GESTÃO',
        items: [
            { label: 'Pedidos', icon: 'fa-solid fa-list-ul' },
            { label: 'Vendas', icon: 'fa-solid fa-wallet' },
        ],
    },
    {
        title: 'CATÁLOGO',
        items: [
            { label: 'Categorias', icon: 'fa-solid fa-layer-group' },
            { label: 'Marcas', icon: 'fa-solid fa-star' },
            { label: 'Produtos', icon: 'fa-solid fa-list' },
        ],
    },
])

export function useLayout() {
  const isMobile = computed(() => window.innerWidth < 1024)

  function toggleSidebar() {
    sidebarOpen.value = !sidebarOpen.value
  }

  function closeSidebar() {
    sidebarOpen.value = false
  }

  return { sidebarOpen, isMobile, toggleSidebar, closeSidebar, sidebarSections }
}