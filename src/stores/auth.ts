import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { AuthUser } from '@/types/user'

export const useAuthStore = defineStore('auth', () => {
  /** Mock: altere via DevTools Pinia ou `setMockAuthenticated` para testar layout público. */
  const isAuthenticated = ref(true)

  const user = ref<AuthUser | null>({
    displayName: 'Teste Teste Tesete',
    email: 'teste@mail.com',
  })

  function setMockAuthenticated(value: boolean) {
    isAuthenticated.value = value
  }

  function setMockUser(next: AuthUser | null) {
    user.value = next
  }

  return {
    isAuthenticated,
    user,
    setMockAuthenticated,
    setMockUser,
  }
})
