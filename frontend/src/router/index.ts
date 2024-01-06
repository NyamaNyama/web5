import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import LogIn from '../views/LogIn.vue'
import Reg from '../views/Reg.vue'
import Game from '../views/Game.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/LogIn',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/register',
    name: 'reg',
    component: Reg
  },
  {
    path:'/',
    name:'MainMenu',
    component: Game
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
