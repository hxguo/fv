<template>
  <div style="padding: 1rem 0;">
    <x-img :src="img" :defaultSrc="img"></x-img>
  </div>
</template>

<script>
  import XImg from '../../../node_modules/vux/src/components/x-img/index.vue'

  export default {
    components: {
      XImg
    },
    name: 'MineFooter',
    data () {
      return {
        img: '/static/images/my/bottom_logo.png'
      }
    }
  }
</script>

<style>
</style>
