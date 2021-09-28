<script>
export default {
  name: 'CustomerCard',
  props: ['customer'],
  data() {
    return {
      defaultInfo: 'This customer has no open requests',
    }
  },
}
</script>

<template lang="pug">
.box
  h1 {{customer.name}} ({{ customer.age }})
  p Request: {{ customer.requests }}
  h2 Photos ({{ customer.photo.length }})

  .photo(v-for="request in customer.requests")
    h3 {{ photo.filename }}
    p(v-if="!photo.addedBy.length")
      | no likes yet!
    p(v-else)
      | {{photo.addedBy.map(customer => customer.name).join(', ') }}
</template>

<style lang="scss" scoped>
.box {
  padding: 0.2rem;
  border: 1px solid rgba(84, 114, 114, 0.836);
  background: rgb(130, 230, 216);
  border-radius: 0.3rem;
  margin: 10px;
  margin-right: 1000px;
}
</style>
