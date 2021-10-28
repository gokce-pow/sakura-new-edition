<script>
export default {
  name: 'Home',
}
</script>

<template lang="pug">
  .home
    h1 Welcome to Sakura
    img(src="../assets/img/sakura-tree.png" alt="test home page test" width=80 )
    .box1
        h2 Easiest way to get the service you want
    .box2
        h3 Get quotes for free, top quality 100.000 professionals are ready for you.
</template>

<style lang="scss" scoped>
.box1 {
  padding: 0.2rem;
  border: 4px solid rgba(84, 114, 114, 0.836);
  background: rgb(130, 230, 216);
  border-radius: 0.3rem;
  box-shadow: blanchedalmond;
  margin-right: 40rem;
  margin-bottom: 2rem;
}
.box2 {
  padding: 0.2rem;
  border: 4px solid rgba(84, 114, 114, 0.836);
  background: rgb(130, 230, 216);
  border-radius: 0.3rem;
  box-shadow: blanchedalmond;
  margin-right: 40rem;
}
</style>
