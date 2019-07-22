import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Signin from './views/Signin.vue'
import Signup from './views/Signup.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { requiresAuth: true }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: { requiresAuth: true }
    },
    {
      path: '/signin',
      name: 'signin',
      component: Signin,
      meta: { requiresAuth: false }
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup,
      meta: { requiresAuth: true }
    }
  ]
})
