import Vue from 'vue'
import VueRouter from 'vue-router'
import CustomerList from '../views/customer-list.vue'
import Login from '../views/login.vue'
import Register from '../views/register.vue'

Vue.use(VueRouter)

export default function init(store) {
  return new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      {
        path: '/',
        name: 'CustomerList',
        component: CustomerList,
      },
      {
        path: '/customers/:id',
        name: 'CustomerDetail',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/customer-detail.vue'),
      },
      {
        path: '/register',
        name: 'register',
        component: Register,
        beforeEnter(to, from, next) {
          if (store.state.customer) return next('/profile')
          return next()
        },
      },
      {
        path: '/login',
        name: 'login',
        component: Login,
        beforeEnter(to, from, next) {
          if (store.state.customer) return next('/profile')
          return next()
        },
      },
      {
        path: '/profile',
        name: 'profile',
        component: CustomerList,
        beforeEnter(to, from, next) {
          if (!store.state.customer) return next('/login')
          return next()
        },
      },
    ],
  })
}
