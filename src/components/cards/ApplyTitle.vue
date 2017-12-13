<template>
  <div class="apply-title">
    <img :src="img">
  </div>
</template>

<script>
  export default {
    name: 'ApplyTitle',
    data () {
      return {
        img: '/static/images/cards/pic.png'
      }
    }
  }
</script>

<style scoped>
  .apply-title {
    font-size: 16px;
  }

  .apply-title img {
    margin-top: -0.1rem;
    width: 10rem;
    height: 3rem;
  }
</style>
