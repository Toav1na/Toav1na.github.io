import { createRouter, createWebHashHistory } from 'vue-router'
// On importe les pages (qu'on va créer juste après)
import HomeView from '../views/HomeView.vue'

const routes = [
  { path: '/', name: 'Accueil', component: HomeView },
  { path: '/scolarite', name: 'Scolarite', component: () => import('../views/ScolariteView.vue') },
  { path: '/passions', name: 'Passions', component: () => import('../views/PassionsView.vue') },
  { path: '/projets', name: 'Projets', component: () => import('../views/ProjetsView.vue') },
  { path: '/contact', name: 'Contact', component: () => import('../views/ContactView.vue') },
]

const router = createRouter({
  // createWebHashHistory est important pour GitHub Pages
  history: createWebHashHistory(),
  routes,
})

export default router