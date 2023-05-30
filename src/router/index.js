// Import Vue and Vue Router
import Vue from 'vue'
import VueRouter from 'vue-router'

// Import your components
import Home from './views/Home.vue'
import About from './views/About.vue'


// Use Vue Router
Vue.use(VueRouter)

// Define routes
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]

// Create the router instance
const router = new VueRouter({
  mode: 'history',
  routes
})

// Export the router instance
export default router
