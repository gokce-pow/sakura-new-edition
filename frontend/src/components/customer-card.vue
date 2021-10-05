<script>
export default {
  name: 'CustomerCard',
  props: ['customer'],
}
</script>

<template lang="pug">
.box
  h1 {{customer.name}} ({{ customer.age }})
  p Request: {{ customer.requests }}
  h2 Photos ({{ customer.requests.length }})
</template>

<style lang="scss" scoped>
.box {
  padding: 0.2rem;
  border: 1px solid rgba(84, 114, 114, 0.836);
  background: rgb(130, 230, 216);
  border-radius: 0.3rem;
}
</style>
