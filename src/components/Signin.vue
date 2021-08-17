<template>
  <section class="body relative">
    <div class="top-half w-screen h-screen bg-fd-bgt">
      <p class="text-3xl">some type of content</p>
    </div>
      <img class="geo-img absolute " src="../assets/img/geo-patterns.png" alt="Geometric Patterns">
  </section>
</template>

<script>
export default {
  name: 'Signin',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top-half {
  clip-path: polygon(0 0, 100% 0, 100% 35%, 0 70%);
}
.geo-img {
  right: 0;
  top: 31vh;
}
</style>
