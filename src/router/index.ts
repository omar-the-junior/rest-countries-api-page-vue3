import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CountryView from '@/views/CountryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/country/:cca3',
      name: 'countryDetails',
      component: CountryView
    }
  ],
  scrollBehavior(to, from) {
    // scroll to top when navigating between two routes of the same name
    if (from.name === to.name) {
      return {
        top: 0,
        behavior: 'smooth'
      }
    }
    return {}
  }
})

export default router
