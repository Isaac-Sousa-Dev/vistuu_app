import { ref, computed } from 'vue'

const sidebarOpen = ref(false)

const sidebarSections = ref([
    {
        title: 'INÍCIO',
        items: [{ label: 'Dashboard', icon: 'fa-solid fa-gauge-simple-high', routeName: 'Home', active: true }],
    },
    {
        title: 'ATENDIMENTO',
        items: [
            {
                label: 'Agente IA',
                icon: 'fa-solid fa-robot',
                badge: 'Em breve',
                disabled: true,
                active: false,
                routeName: null,
            },
        ],
    },
    {
        title: 'GESTÃO',
        items: [
            { label: 'Pedidos', icon: 'fa-solid fa-list-ul', routeName: 'Pedidos', active: false },
            { label: 'Vendas', icon: 'fa-solid fa-wallet', routeName: 'Vendas', active: false },
        ],
    },
    {
        title: 'CATÁLOGO',
        items: [
            { label: 'Categorias', icon: 'fa-solid fa-layer-group', active: false, routeName: null },
            { label: 'Marcas', icon: 'fa-solid fa-star', active: false, routeName: null },
            { label: 'Produtos', icon: 'fa-solid fa-list', active: false, routeName: null },
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