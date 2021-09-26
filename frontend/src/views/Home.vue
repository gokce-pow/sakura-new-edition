<template lang="pug">
  .home
    img(alt="Vue logo" src="../assets/logo.png")
    HelloWorld(msg="Welcome to Your Vue.js App")
    div(v-for="customer in customers") {{ customer.name }} has created a new request!
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/hello-world.vue'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  data() {
    return {
      customers: [],
    }
  },
  async created() {
    const customersRequest = await axios.get('/api/customers')

    this.customers = customersRequest.data
  },
}
</script>
