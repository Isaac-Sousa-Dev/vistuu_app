<template>
  <div>
    <div class="card flex justify-center">
        <Drawer v-model:visible="visible" header="Drawer">
            <div>
              Icon
            </div>
        </Drawer>
      </div>
      <Button icon="pi pi-arrow-right" @click="visible = true" />
  </div>

</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import Drawer from 'primevue/drawer';

import { ref } from "vue";

const visible = ref(false);

interface NavItem {
  label: string
  icon: string
  routeName?: string
  badge?: string
  disabled?: boolean
}

interface NavSection {
  title: string
  items: NavItem[]
}

interface Props {
  storeName?: string
  visible?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  storeName: 'Loja Teste',
  visible: false,
})

const emit = defineEmits<{
  'update:visible': [value: boolean]
}>()

const route = useRoute()

const sections: NavSection[] = [
  {
    title: 'INÍCIO',
    items: [{ label: 'Dashboard', icon: 'Whatsapp', routeName: 'Home' }],
  },
  {
    title: 'ATENDIMENTO',
    items: [
      {
        label: 'Agente IA',
        icon: 'Whatsapp',
        badge: 'Em breve',
        disabled: true,
      },
    ],
  },
  {
    title: 'GESTÃO',
    items: [
      { label: 'Pedidos', icon: 'Sync' },
      { label: 'Vendas', icon: 'Wallet' },
    ],
  },
  {
    title: 'CATÁLOGO',
    items: [
      { label: 'Categorias', icon: 'ObjectsColumn' },
      { label: 'Marcas', icon: 'Star' },
      { label: 'Produtos', icon: 'List' },
    ],
  },
]

function isActiveRoute(item: NavItem): boolean {
  return Boolean(item.routeName && route.name === item.routeName)
}

function closeAfterNavigate() {
  emit('update:visible', false)
}

function handleBackdropClick() {
  emit('update:visible', false)
}
</script>

<style scoped>
.app-sidebar {
  background-color: #412B6B;
}

.app-sidebar__section-title {
  margin-bottom: 0.25rem;
  border-radius: 0 0.5rem 0.5rem 0;
  /* background-color: #45336e; */
  padding: 0.4rem 1rem;
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  color: #e67e22;
  text-transform: uppercase;
}

.app-sidebar__item {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.50rem;
  border: none;
  border-radius: 0 0.375rem 0.375rem 0;
  padding: 0.40rem 1rem;
  font-size: 0.9375rem;
  color: #fff;
  background: transparent;
  cursor: pointer;
  transition: background-color 0.15s ease;
}

.app-sidebar__item:hover:not(.app-sidebar__item--disabled):not(.app-sidebar__item--active) {
  background-color: rgba(255, 255, 255, 0.06);
}

.app-sidebar__item--active {
  background-color: #e67e22;
  border-right: 4px solid #e67e22;
}

.app-sidebar__item--disabled {
  cursor: not-allowed;
  opacity: 0.85;
}

.app-sidebar__icon {
  font-size: 1.125rem;
  opacity: 0.95;
}

:deep(.app-sidebar__badge.p-badge) {
  min-width: unset;
  padding: 0.2rem 0.5rem;
  border-radius: 9999px;
  background-color: #e67e22;
  color: #fff;
  font-size: 0.65rem;
}
</style>
