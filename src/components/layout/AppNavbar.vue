<template>
  <header
    class="flex h-14 items-center justify-between bg-[#4E56C0] px-4 md:px-6"
  >
    <template v-if="isAuthenticated">
      <div class="flex min-w-0 items-center gap-3">
        <button
          type="button"
          class="cursor-pointer rounded p-1 text-white transition hover:bg-gray-100 hover:text-gray-700"
          aria-label="Abrir menu"
          @click="handleToggleSidebar"
        >
          <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <h1 class="truncate text-lg font-semibold text-white">{{ pageTitle }}</h1>
      </div>

      <div class="flex items-center gap-4">
        <button
          type="button"
          class="cursor-pointer rounded p-1 text-white transition hover:bg-blue-500"
          aria-label="Notificações"
          @click="handleNotificationsClick"
        >
          <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </button>

        <button
          type="button"
          class="flex cursor-pointer items-center gap-3 rounded-lg py-1 pl-1 pr-0 transition hover:bg-gray-50"
          @click="handleProfileClick"
        >
          <div class="hidden min-w-0 text-right sm:block">
            <div class="truncate text-sm font-medium text-white">{{ user?.displayName }}</div>
            <div class="truncate text-xs text-gray-300">{{ user?.email }}</div>
          </div>
          <span
            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-violet-200 bg-violet-100 text-sm font-semibold text-violet-700"
          >
            {{ userInitials }}
          </span>
        </button>
      </div>
    </template>

    <template v-else>
      <RouterLink :to="{ name: 'Home' }" class="flex items-center gap-2 font-semibold text-gray-900">
        <span class="text-lg">Vistuu</span>
      </RouterLink>

      <div class="flex items-center gap-2">
        <RouterLink v-slot="{ navigate }" :to="{ name: 'Login' }" custom>
          <Button label="Entrar" severity="secondary" text @click="navigate" />
        </RouterLink>
        <RouterLink v-slot="{ navigate }" :to="{ name: 'Login' }" custom>
          <Button label="Cadastrar" @click="navigate" />
        </RouterLink>
      </div>
    </template>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { RouterLink } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { getInitialsFromDisplayName } from '@/utils/user-display'
import { useLayout } from '@/composables/layout';

const layout = useLayout();

interface Props {
  pageTitle?: string
}

const props = withDefaults(defineProps<Props>(), {
  pageTitle: 'Painel',
})

const emit = defineEmits<{
  toggleSidebar: []
}>()

const authStore = useAuthStore()
const { isAuthenticated, user } = storeToRefs(authStore)

const pageTitle = computed(() => props.pageTitle)

const userInitials = computed(() => {
  const name = user.value?.displayName ?? ''
  return getInitialsFromDisplayName(name)
})

function handleToggleSidebar() {
  console.log('toggle sidebar')
  layout.toggleSidebar();
} 

function handleNotificationsClick() {
  // TODO: painel de notificações
}

function handleProfileClick() {
  // TODO: menu do utilizador
}
</script>
