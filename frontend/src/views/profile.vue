<script>
import axios from 'axios'
import CustomerCard from '@/components/customer-card.vue'
import Counter from '@/components/counter.vue'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Profile',
  components: { CustomerCard, Counter },
  data() {
    return {
      customers: [],
      time: new Date(),
      message: '',
    }
  },
  async created() {
    this.customers = await this.fetchCustomers()
    console.log(this.customers)
  },
  methods: {
    ...mapActions(['fetchCustomers', 'goLive', 'sendMessageToLiveStream', 'joinStream']),
    sendMessage(e) {
      e.preventDefault()
      this.sendMessageToLiveStream(this.message)
      this.message = ''
    },
  },
  computed: {
    ...mapState(['currentLiveStream', 'liveStreams', 'customer', 'liveStreamMessages']),
  },
}
</script>

<template lang="pug">
  .home
    img(src="../assets/img/sakura-tree.png" alt="test home page test" width=40)
    h1 Hello {{ (customer.name).toUpperCase() }},
    p The time is {{ time }} 
      h2 Users
    div(v-for="customer in customers")
      router-link(:to="`/customers/${customer._id}`") {{ customer.name }}
    div(v-if="liveStreams.length")
      h2 Live streams
      div(v-for="stream in liveStreams")
        p {{ stream }}
        button(@click="joinStream(stream)") Join stream
    button(@click="goLive") Go Live
    div(v-if="currentLiveStream")
      h3 Live stream
      .messages
        .message(v-for="message in liveStreamMessages")
          p
            span {{ message.author }}:&nbsp;
            span {{ message.body }}
      form(@submit="sendMessage")
        input(type="text" v-model="message")
        input(type="submit" value="Send message")
</template>
