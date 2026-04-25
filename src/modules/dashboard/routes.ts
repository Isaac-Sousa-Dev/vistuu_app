const dashboardRoutes = [
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/Dashboard.vue'),
    },
]

export default dashboardRoutes;