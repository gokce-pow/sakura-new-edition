<script>
export default {
  name: 'UserCard',
  props: ['customer'],
  data() {
    return {
      defaultBio: 'This user has no bios',
    }
  },
}
</script>

<template lang="pug">
.box
    h1 {{customer.name}} ({{ customer.age }})
    p Request: {{ customer.request }}

//-     h2 Photos ({{ user.photos.length }})

//- .photo(v-for="photo in user.photos")
//-     h3 {{ photo.filename }}
//-     p(v-if="!photo.likedBy.length")
//-         | no likes yet!
//-     p(v-else)
//-     | {{photo.likedBy.map(user => user.name).join(', ') }}


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
