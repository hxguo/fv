<template>
  <div class="mine-referee">
    <div class="mine-referee-default">
      <x-img :src="imgDefault" :defaultSrc="imgDefault"></x-img>
      <div class="mine-referee-name">戴大大</div>
      <div class="mine-referee-phone">
        <x-img :src="imgPhone" :defaultSrc="imgPhone"></x-img>
        159 3456 5452
      </div>
      <div class="mine-referee-wxcode">
        <x-img :src="imgWxcode" :defaultSrc="imgWxcode"></x-img>
      </div>
      <div class="mine-referee-wx">
        长按识别加好友
      </div>
    </div>
  </div>
</template>

<script>
  import XImg from '../../../node_modules/vux/src/components/x-img/index.vue'

  export default {
    components: {XImg},
    name: 'MineReferee',
    data () {
      return {
        imgDefault: '/static/images/my/ic_referrer_default.png',
        imgPhone: '/static/images/my/ic_phone.png',
        imgWxcode: '/static/images/my/qrcode.png'
      }
    },
    created: function () {
      this.$root.bus.$emit('showTabbar', false)
    }
  }
</script>

<style>
  .weui-tab {
    background-image: url('/static/images/my/bg_referrer.png');
    background-size: 100% 100%;
  }

  .mine-referee-default {
    margin-top: 1.5rem;
  }

  .mine-referee-default img {
    width: 2.667rem;
    height: 2.667rem;
  }

  .mine-referee-name {
    font-size: 0.427rem;
    color: #444;
  }

  .mine-referee-phone {
    display: inline-block;
    font-size: 0.373rem;
    color: #fff;
    background-color: #54d769;
    height: 0.7rem;
    line-height: 0.7rem;
    padding: 0.1rem 0.4rem;
    border-radius: 1rem;
  }

  .mine-referee-phone img {
    width: 0.533rem;
    height: 0.52rem;
  }

  .mine-referee-wxcode {
    margin-top: 1rem;
  }

  .mine-referee-wxcode img {
    width: 4.8rem;
    height: 4.8rem;
  }

  .mine-referee-wx {
    display: inline-block;
    font-size: 0.32rem;
    color: #fff;
    background-color: #fb3d38;
    padding: 0.2rem 0.4rem;
    border-radius: 0.4rem;
  }
</style>
