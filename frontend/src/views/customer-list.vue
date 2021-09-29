<script>
import axios from 'axios'
import Counter from '@/components/counter.vue'
import { mapActions } from 'vuex'

export default {
  name: 'CustomerList',
  components: { Counter },
  data() {
    return {
      customers: [],
      time: new Date(),
    }
  },
  async created() {
    this.customers = await this.fetchCustomers()
  },
  methods: {
    ...mapActions(['fetchCustomers']),
  },
}
</script>

<template lang="pug">
  .home
    h1 Sakura
    p The time is {{ time }} 
    h2 Customers
    div(v-for="customer in customers")
      router-link(:to="`/customers/${customer._id}`") {{ customer.name }}
    Counter
</template>
