<script>
import axios from 'axios'
import Counter from '@/components/counter.vue'
import CustomerCard from '@/components/customer-card.vue'
import { mapActions } from 'vuex'

export default {
  name: 'CustomerDetail',
  components: { CustomerCard, Counter },
  data() {
    return {
      customer: null,
    }
  },
  async mounted() {
    this.customer = await this.fetchCustomer(this.$route.params.id)
  },
  methods: {
    ...mapActions(['fetchCustomer']),
  },
}
</script>

<template lang="pug">
  .about
    h1 This is a customer detail
    CustomerCard(:customer="customer" v-if="customer")
    Counter
</template>
