import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component:() => import('../views/ContactView.vue')
    },
    {
      path: '/work',
      name: 'work',
      component:() => import('../views/WorkView.vue')
    },
   {
    path:'/rules',
    name: 'rules',
    component:() => import('../views/RulesView.vue')
   },
{
  path: '/login',
  name: 'login',
  component:() => import('../views/LoginView.vue')
},
{
  path: '/postin',
  name: 'postin',
  component:() => import('../views/PostinView.vue')
},

  ]
})

export default router
