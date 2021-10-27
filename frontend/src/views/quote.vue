<script>
import CustomerCard from '@/components/customer-card.vue'
import { mapActions } from 'vuex'

export default {
  name: 'getQuote',
  components: { CustomerCard },
  data() {
    return {
      customer: '',
      address: '',

      backendError: null,
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
//- .register
//-       h1 Get Quote
//-       label(for="name") Name:&nbsp;
//-         input(v-model="name" id="name" type="text" placeholder="Your name" required)
//-       label(for="age") Age:&nbsp;
//-         input(v-model="age" id="age" type="number" placeholder="Your age" required)
//-       label(for="email") Email:&nbsp;
//-         input(v-model="email" id="email" type="email" placeholder="Your email" required)
//-       label(for="address") Address:&nbsp;
//-         input(v-model="address" id="address" type="address" placeholder="Your address" required)
//-       label(for="password") Password:&nbsp;
//-         input(v-model="password" id="password" type="password" placeholder="Your password" required)
//-       input(type="submit" value="Register")
//-     div(v-if="backendError") {{ backendError }}
//-     div Already have an account? <router-link to="/login">Log in</router-link>
</template>

<style lang="scss" scoped>
label {
  display: block;
  margin: 1rem 0;
}
</style>
