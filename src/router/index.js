import { createRouter, createWebHashHistory } from 'vue-router'
import LoginRegister from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import User from '../views/User.vue'

const routes = [
  {
    path: '/',
    name: 'LoginRegister',
    component: LoginRegister
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/user/:id',
    name: 'User',
    component: User
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
