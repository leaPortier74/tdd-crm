import { createRouter, createWebHashHistory } from 'vue-router'
import LoginRegister from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'LoginRegister',
    component: LoginRegister
  },
  {
    path: '/user/:id',
    name: 'User',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/User.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
