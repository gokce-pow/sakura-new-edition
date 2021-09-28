import Vue from 'vue'
import VueRouter from 'vue-router'
import CustomerList from '../views/customer-list.vue'

Vue.use(VueRouter)

const routes = [
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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
