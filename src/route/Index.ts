import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'base',
    component: () => import('views/Index.vue'),
    children: [
    ]
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('views/homeContainer/Index.vue'),
    children: [
      {
        path: 'user',
        name: 'user',
        component: () => import('views/user/Index.vue')
      },
      { path: '', component: () => import('views/error/Index.vue') }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('views/login/Index.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

// 导航守卫
router.beforeEach((to) => {
  console.log(to)
})

export default router
