<script>
import axios from 'axios'
import CustomerCard from '@/components/customer-card.vue'

export default {
  name: 'CustomerList',
  components: {
    CustomerCard,
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
    h2 Customers
    div(v-for="customer in customers")
      router-link(:to="`/customers/${customer._id}`") {{ customer.name }}
</template>
