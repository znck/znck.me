import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: About,
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import(/* webpackChunkName: "projects" */ '../views/Projects.vue'),
  },
  {
    path: '/speaks',
    name: 'speaks',
    component: () => import(/* webpackChunkName: "speaks" */ '../views/Speaks.vue'),
  },
  {
    path: '/uses',
    name: 'uses',
    component: () => import(/* webpackChunkName: "uses" */ '../views/Uses.vue'),
  },
  {
    path: '/press',
    name: 'press',
    component: () => import(/* webpackChunkName: "press" */ '../views/Press.vue'),
  },
  {
    path: '/media-log',
    name: 'media-log',
    component: () => import(/* webpackChunkName: "media-log" */ '../views/MediaLog.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
