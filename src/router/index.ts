import { createRouter, createWebHistory } from 'vue-router'
import dashboardRoutes from '@/modules/dashboard/routes';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...dashboardRoutes,
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/pages/Login.vue'),
    }
  ],
})

export default router
