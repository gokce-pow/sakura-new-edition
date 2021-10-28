<script>
import { mapActions } from 'vuex'

export default {
  name: 'register',
  data() {
    return {
      name: '',
      age: null,
      email: '',
      address: '',
      password: '',

      backendError: null,
    }
  },
  methods: {
    ...mapActions(['register']),
    async submitLogin(e) {
      e.preventDefault()

      try {
        await this.register({
          name: this.name,
          age: this.age,
          email: this.email,
          address: this.address,
          password: this.password,
        })

        this.$router.push('/login')
      } catch (e) {
        this.backendError = e.response.data.message
      }
    },
  },
}
</script>

<template lang="pug">
.home
  img(src="../assets/img/sakura-tree.png" alt="test home page test" width=40)
  .register
      form( @submit="submitLogin")
        h1 Create a new account
        label(for="name") Name:&nbsp;
          input(v-model="name" id="name" type="text" placeholder="Your name" required)
        label(for="age") Age:&nbsp;
          input(v-model="age" id="age" type="number" placeholder="Your age" required)
        label(for="email") Email:&nbsp;
          input(v-model="email" id="email" type="email" placeholder="Your email" required)
        label(for="address") Address:&nbsp;
          input(v-model="address" id="address" type="address" placeholder="Your address" required)
        label(for="password") Password:&nbsp;
          input(v-model="password" id="password" type="password" placeholder="Your password" required)
        input(type="submit" value="Register")
      div(v-if="backendError") {{ backendError }}
      div Already have an account? <router-link to="/login">Log in</router-link>
</template>

<style lang="scss" scoped>
label {
  display: block;
  block-size: 40px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 1rem 0;
}
input {
  padding: 0.2rem;
  border: 2px solid rgba(84, 114, 114, 0.836);
  background: rgb(248, 237, 244);
  border-radius: 0.3rem;
  box-shadow: blanchedalmond;
  margin-right: 75rem;
}
</style>
