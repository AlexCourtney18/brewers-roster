import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PlayerDetails from '../views/PlayerDetails.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/players/:id',
    name: 'Details',
    component: PlayerDetails,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
