<template>
  <div>
    <div class="card flex justify-center">
        <Drawer class="p-6 bg-[#4E56C0]" v-model:visible="layout.sidebarOpen.value">
          <template #header>
              <SidebarHeader />
          </template>
          <div class="mt-7 flex flex-col">

            <SidebarContent />

          </div>
          <template #footer>
              <div class="flex items-center gap-2">
                  <Button label="Account" icon="pi pi-user" class="flex-auto" variant="outlined"></Button>
                  <Button label="Logout" icon="pi pi-sign-out" class="flex-auto" severity="danger" text></Button>
              </div>
          </template>
        </Drawer>
      </div>
      <!-- <Button icon="pi pi-arrow-right" @click="visible = true" /> -->
  </div>

</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import Drawer from 'primevue/drawer';
import { useLayout } from '@/composables/useLayout';
import SidebarHeader from './components/SidebarHeader.vue';
import SidebarContent from './components/SidebarContent.vue';

const layout = useLayout();

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

const sections = layout.sidebarSections.value

function isActiveRoute(item: NavItem): boolean {
  return Boolean(item.routeName && route.name === item.routeName)
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
