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
  h2 Photos ({{ customer.photos.length }})

  .photo(v-for='photo in customer.photos')
    img(:src="`https://picsum.photos/seed/${photo.filename}/320/320`" :alt="photo.description" :title="photo.description")
    p(v-if="!photo.addedBy.length")
      | no photo yet!
    p(v-else)
      | {{ photo.addedBy.map(customer => customer.name).join(', ') }}
</template>

<style lang="scss" scoped>
.box {
  padding: 0.2rem;
  border: 10px solid rgba(84, 114, 114, 0.836);
  background: rgb(130, 230, 216);
  border-radius: 0.3rem;
  box-shadow: blanchedalmond;
}
</style>
