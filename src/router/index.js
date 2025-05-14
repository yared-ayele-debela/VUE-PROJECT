import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import JobsView from '@/views/JobsView.vue'
import NotFoundVIew from '@/views/NotFoundVIew.vue'
import JobView from '@/views/JobView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL), // ✅ Works with Vite
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView,
    },
    {
      path: '/jobs/:id',
      name: 'job',
      component: JobView,
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundVIew,
    }

  ],
})

export default router
