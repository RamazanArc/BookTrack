import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewBookView from "@/views/NewBookView.vue";
import LibraryView from "@/views/LibraryView.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/new',
    name: 'Add Book',
    component: NewBookView
  },
  {
    path: '/library',
    name: 'Library',
    component: LibraryView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
