import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/catalogoa',
    name: 'CatalogoAdmin',
    component: () => import ('../views/CatalogoAdmin.vue')
  },
  {
    path: '/catalogop',
    name: '/CatalogoPublic',
    component: () => import ('../views/CatalogoPublic.vue')
  },
  {
    path: '/autenticacion',
    name: '/Autenticacion',
    component: () => import ('../views/Autenticacion.vue')
  }
 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
