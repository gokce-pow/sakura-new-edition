<script>
import axios from 'axios'
import CustomerCard from '@/components/customer-card.vue'
import Counter from '@/components/counter.vue'
import { mapActions } from 'vuex'

export default {
  name: 'CustomerList',
  components: { CustomerCard, Counter },
  data() {
    return {
      customers: [],
      time: new Date(),
    }
  },
  async created() {
    this.customers = await this.fetchCustomers()
    console.log(this.customers)
  },
  methods: {
    ...mapActions(['fetchCustomers']),
  },
}
</script>

<template lang="pug">
  .home
    img(src="../assets/img/sakura-tree.png" alt="test home page test" width=40)
    h3 Customers
    div(v-for="customer in customers")
      router-link(:to="`/customers/${customer._id}`") {{ customer.name }}
    Counter
</template>
