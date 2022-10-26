import { LocalCache } from '@/utils/Cache'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/login',
      component: () => import('@/views/login/login.vue')
    },
    { children: [], name: 'main', path: '/main', component: () => import('@/views/main/main.vue') },
    {
      path: '/:pathMatch(.*)',
      component: () => import('@/views/notFound/notFound.vue')
    }
  ]
})

router.beforeEach((to, from) => {
  if (to.path === '/main') {
    if (!LocalCache.get('token')) return '/login'
    return LocalCache.get('userMenus')[0].children[0].url
  }
})

export default router
