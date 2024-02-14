import { createRouter, createWebHistory } from 'vue-router'
import { defineAsyncComponent } from 'vue'
import About from './views/About.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: About,
  },
  // {
  //   path: '/projects',
  //   name: 'projects',
  //   component: defineAsyncComponent(() => import('./views/Projects.vue')),
  // },
  {
    path: '/speaks',
    name: 'speaks',
    component: defineAsyncComponent(() => import('./views/Speaks.vue')),
  },
  // {
  //   path: '/uses',
  //   name: 'uses',
  //   component: defineAsyncComponent(() => import('./views/Uses.vue')),
  // },
  {
    path: '/press',
    name: 'press',
    component: defineAsyncComponent(() => import('./views/Press.vue')),
  },
]

const router = createRouter({ routes, history: createWebHistory() })

export default router
