<script>
import axios from 'axios'
import UserCard from '@/components/user-card.vue'

export default {
  name: 'Home',
  components: {
    UserCard,
  },
  data() {
    return {
      customers: [],
      time: new Date(),
    }
  },
  async created() {
    const customersRequest = await axios.get('/api/customers')

    this.customers = customersRequest.data
  },
}
</script>

<template lang="pug">
  .home
    h1 Sakura
    p The time is {{ time }}
    user-card(v-for="customer in customers" :customer="customer" :key="customer.name")
</template>
