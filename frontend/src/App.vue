<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'App',
  methods: {
    ...mapActions(['logout']),
    async doLogout() {
      await this.logout()
      this.$router.push('/login')
    },
  },
  computed: {
    ...mapState(['customer']),
  },
}
</script>
<template lang="pug">
  #app
    #nav
      router-link(to="/") Home&nbsp;
      router-link(to="/profile")  Profile&nbsp;
      router-link(to="/customer-list") Customer List&nbsp;
      router-link(to="/login") Login&nbsp;
      router-link(to="/register") Register&nbsp;
      a(@click="doLogout" href="#") Logout
    router-view
</template>

<style lang="scss">
#app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    margin: 0 1rem;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
