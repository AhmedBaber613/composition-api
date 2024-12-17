import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Details from '../views/details.vue'
import Create from '../views/create.vue'
import Tag from '../views/Tag.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/posts/:id',
    name: 'Details',
    component: Details,
    props: true
  },
  {
    path: '/create',
    name: 'Create',
    component: Create
  },
  {
    path: '/tag/:tag',
    name: 'Tag',
    component: Tag
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router