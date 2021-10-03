import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const mutations = {
  INCREMENT_COUNT: 'incrementCount',
}

export default new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    [mutations.INCREMENT_COUNT](state) {
      state.count++
    },
  },
  actions: {
    incrementCount({ commit }) {
      // do whatever you want
      // decide on what you want to commit
      commit(mutations.INCREMENT_COUNT)
    },
    async fetchCustomer(store, id) {
      const customerRequest = await axios.get(`/api/customers/${id}`)
      return customerRequest.data
    },
    async fetchCustomers() {
      const customersRequest = await axios.get('/api/customers')
      return customersRequest.data
    },
  },
  modules: {},
})
