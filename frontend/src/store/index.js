import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import io from 'socket.io-client'

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL
axios.defaults.withCredentials = true

Vue.use(Vuex)

const socket = io(process.env.VUE_APP_BASE_URL)

// socket.on('hello world!', () => {
//   console.log('we received message from the websocket server!')
// })

// setInterval(() => {
//   const number = Math.random()
//   console.log(`i'm sending a request`, number)
//   socket.emit('new message', number, res => {
//     console.log('this is a response', res)
//   })

//   socket.emit('another api', res => {
//     console.log(res)
//   })
// }, 3000)

const mutations = {
  INCREMENT_COUNT: 'increment count',
  SET_USER: 'set user',
  SET_LIVE_STREAM: 'set live stream',
  ADD_LIVE_STREAM: 'add live stream',
  ADD_MESSAGE_TO_LIVE_STREAM: 'add message to live stream',
}

const store = new Vuex.Store({
  state: {
    count: 0,
    customer: null,
    currentLiveStream: null,
    liveStreams: [],
    liveStreamMessages: [],
  },
  mutations: {
    [mutations.INCREMENT_COUNT](state) {
      state.count++
    },
    [mutations.SET_USER](state, customer) {
      state.customer = customer
    },
    [mutations.SET_LIVE_STREAM](state, live) {
      state.currentLiveStream = live
    },
    [mutations.ADD_LIVE_STREAM](state, stream) {
      state.liveStreams.push(stream)
    },
    [mutations.ADD_MESSAGE_TO_LIVE_STREAM](state, message) {
      state.liveStreamMessages.push(message)
    },
  },
  actions: {
    incrementCount({ commit }) {
      commit(mutations.INCREMENT_COUNT)
    },
    async fetchCustomer(store, id) {
      const usersRequest = await axios.get(`/api/customers/${id}`)
      return usersRequest.data
    },
    async fetchCustomers() {
      const usersRequest = await axios.get('/api/customers')
      return usersRequest.data
    },
    async fetchSession({ commit }) {
      const user = await axios.get('/api/account/session')
      commit(mutations.SET_USER, user.data || null)
    },
    async fetchHandies() {
      const usersRequest = await axios.get('/api/handie')
      return usersRequest.data
    },
    async fetchHandie(store, id) {
      const usersRequest = await axios.get(`/api/handie/${id}`)
      return usersRequest.data
    },
    async login({ commit }, credentials) {
      try {
        const user = await axios.post('/api/account/session', credentials)
        console.log('User: ', user)
        commit(mutations.SET_USER, user.data || null)
      } catch (e) {
        throw e
      }
    },
    async register(store, user) {
      return axios.post('/api/account', user)
    },
    async logout({ commit }) {
      await axios.delete('/api/account/session')
      commit(mutations.SET_USER, null)
    },
    async goLive({ state, commit }) {
      socket.emit('go live', state.customer._id, status => {
        commit(mutations.SET_LIVE_STREAM, state.customer._id)
      })
    },

    async addLiveStream({ state, commit }, stream) {
      commit(mutations.ADD_LIVE_STREAM, stream)
    },
    async sendMessageToLiveStream({ state, commit }, body) {
      const message = {
        body,
        author: state.customer.name,
      }
      commit(mutations.ADD_MESSAGE_TO_LIVE_STREAM, message)
      socket.emit('new message', state.currentLiveStream, message)
    },
    async joinStream({ state, commit }, stream) {
      socket.emit('join stream', stream)
      commit(mutations.SET_LIVE_STREAM, stream)
    },
  },
  modules: {},
})

socket.on('new live stream', customer => {
  store.dispatch('addLiveStream', customer)
})

socket.on('new live stream message', message => {
  store.commit(mutations.ADD_MESSAGE_TO_LIVE_STREAM, message)
})

export default async function init() {
  await store.dispatch('fetchSession')
  return store
}
