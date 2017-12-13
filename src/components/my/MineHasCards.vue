<template>
  <div class="mine-has-cards">
    <div class="mine-has-cards-img">
      <x-img :src="img" :defaultSrc="img"></x-img>
    </div>
    <div class="mine-has-cards-info">
      <div class="mine-has-cards-info-name">{{name}}</div>
      <div class="mine-has-cards-info-msg">{{msg}}</div>
      <div class="mine-has-cards-info-no">{{no}}</div>
    </div>
    <div class="mine-has-cards-button">
      修 改
    </div>
  </div>
</template>

<script>
  import XImg from '../../../node_modules/vux/src/components/x-img/index.vue'

  export default {
    components: {XImg},
    name: 'MineHasCards',
    data () {
      return {
        img: '/static/images/my/ic_logo_bc.png',
        name: '中国银行',
        msg: '储蓄卡',
        no: '**** **** **** 9133'
      }
    }
  }
</script>

<style>
  .weui-tab {
    background-color: #333333;
  }

  .mine-has-cards {
    position: relative;
    width: 9.467rem;
    height: 2.933rem;
    line-height: 2.933rem;
    background-color: #eb5760;
    margin: 0.267rem auto;
    border-radius: 5px;
    font-size: 0.48rem;
    color: #fff;
  }

  .mine-has-cards-img {
    float: left;
    width: 1.33rem;
    height: 1.33rem;
    background-color: #fff;
    border-radius: 1.33rem;
    margin-top: 0.65rem;
    margin-left: 0.4rem;
    margin-right: 0.4rem;
  }

  .mine-has-cards-img img {
    width: 1.05rem;
    height: 1.05rem;
    vertical-align: top;
    margin-top: 0.14rem;
  }

  .mine-has-cards-info {
    text-align: left;
    font-size: 0.32rem;
    line-height: normal;
    padding-top: 0.6rem;
  }

  .mine-has-cards-info-name {
    font-size: 0.48rem;
  }

  .mine-has-cards-info-msg {
    padding: 0.2rem;
  }

  .mine-has-cards-info-no {
    font-size: 0.373rem;
  }

  .mine-has-cards-button {
    position: absolute;
    top: 0.453rem;
    right: 0.427rem;
    width: 1.173rem;
    height: 0.533rem;
    line-height: 0.533rem;
    font-size: 0.373rem;
    color: #fff;
    background-color: rgba(241, 241, 241, 0.42);
    border-radius: 2px;
  }
</style>
