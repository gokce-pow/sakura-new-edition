<script>
import axios from 'axios'
import CustomerCard from '@/components/customer-card.vue'

export default {
  name: 'CustomerDetail',
  components: { CustomerCard },
  data() {
    return {
      customer: {},
    }
  },
  async created() {
    const customerRequest = await axios.get(`/api/customers/${this.$route.params.id}`)
    this.customer = customerRequest.data
  },
}
</script>

<template lang="pug">
  .about
    h1 This is a customer detail
    CustomerCard(:customer="customer" v-if="user")
</template>
