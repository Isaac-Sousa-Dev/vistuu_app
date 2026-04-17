<template>
  <div>
    <div
      v-show="visible"
      class="fixed inset-0 z-30 bg-black/45 md:hidden"
      aria-hidden="true"
      @click="handleBackdropClick"
    />

    <aside
      class="app-sidebar fixed inset-y-0 left-0 z-40 flex w-64 flex-col overflow-y-auto shadow-xl transition-transform duration-200 ease-out md:translate-x-0"
      :class="visible ? 'translate-x-0' : '-translate-x-full md:translate-x-0'"
      role="navigation"
      aria-label="Menu principal"
    >
      <div class="flex flex-col items-center px-4 pb-6 pt-8">
        <div class="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-white p-2 shadow-sm">
          <img
            src="/sidebar-logo.png"
            alt="Vistuu"
            class="h-full w-full object-contain"
            width="56"
            height="56"
          />
        </div>
        <p class="mt-4 text-center text-base font-bold leading-tight text-white">
          {{ storeName }}
        </p>
      </div>

      <nav class="flex flex-1 flex-col gap-5 pr-5 pb-8">
        <section v-for="section in sections" :key="section.title" class="flex flex-col gap-1">
          <h2 class="app-sidebar__section-title">
            {{ section.title }}
          </h2>
          <ul class="flex flex-col gap-0.5">
            <li v-for="item in section.items" :key="item.label">
              <RouterLink
                v-if="item.routeName && !item.disabled"
                v-slot="{ navigate, isExactActive }"
                custom
                :to="{ name: item.routeName }"
              >
                <button
                  type="button"
                  class="app-sidebar__item w-full text-left"
                  :class="{ 'app-sidebar__item--active': isExactActive || isActiveRoute(item) }"
                  @click="
                    () => {
                      navigate()
                      closeAfterNavigate()
                    }
                  "
                >
                  <span class="app-sidebar__icon pi" :class="item.icon" aria-hidden="true" />
                  <span class="min-w-0 flex-1 truncate font-medium">{{ item.label }}</span>
                </button>
              </RouterLink>
              <div
                v-else
                class="app-sidebar__item"
                :class="{
                  'app-sidebar__item--disabled': item.disabled,
                }"
              >
                <span class="app-sidebar__icon pi" :class="item.icon" aria-hidden="true" />
                <span class="min-w-0 flex-1 truncate font-medium">{{ item.label }}</span>
                <Badge
                  v-if="item.badge"
                  :value="item.badge"
                  class="app-sidebar__badge shrink-0 border-0 text-xs font-semibold"
                />
              </div>
            </li>
          </ul>
        </section>
      </nav>
    </aside>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

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
    items: [{ label: 'Dashboard', icon: 'pi-th-large', routeName: 'Home' }],
  },
  {
    title: 'ATENDIMENTO',
    items: [
      {
        label: 'Agente IA',
        icon: 'pi-whatsapp',
        badge: 'Em breve',
        disabled: true,
      },
    ],
  },
  {
    title: 'GESTÃO',
    items: [
      { label: 'Pedidos', icon: 'pi-sync' },
      { label: 'Vendas', icon: 'pi-wallet' },
    ],
  },
  {
    title: 'CATÁLOGO',
    items: [
      { label: 'Categorias', icon: 'pi-objects-column' },
      { label: 'Marcas', icon: 'pi-star' },
      { label: 'Produtos', icon: 'pi-list' },
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
  background-color: #2a2653;
}

.app-sidebar__section-title {
  margin-bottom: 0.25rem;
  border-radius: 0 0.5rem 0.5rem 0;
  background-color: #45336e;
  padding: 0.4rem 1rem;
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  color: #fff;
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
  background-color: #8e44ad;
  border-right: 4px solid #fff;
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
