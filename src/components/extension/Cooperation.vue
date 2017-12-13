<template>
  <div style="text-align: center;position: relative;">
    <x-img :src="img" style="width: 10rem;"></x-img>
    <x-button style="position:absolute; bottom:1.5rem;left: 50%;margin-left:-0.8rem;" mini type="warn">提交申请</x-button>
  </div>
</template>

<script>
  import XImg from '../../../node_modules/vux/src/components/x-img/index.vue'
  import XButton from '../../../node_modules/vux/src/components/x-button/index.vue'

  export default {
    components: {
      XButton,
      XImg
    },
    name: 'Cooperation',
    data () {
      return {
        img: '/static/images/extension/pic.png'
      }
    },
    created: function () {
      this.$root.bus.$emit('showTabbar', false)
    }
  }
</script>

<style>
  #vux_view_box_body {
    padding: 0;
    background-color: #000;
  }
</style>
