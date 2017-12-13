<template>
  <div>
    <div class="about-us">
      <x-img :src="img" :defaultSrc="img"></x-img>
      <div>富加</div>
    </div>
    <group class="content-us">
      <cell is-link>
        <x-img slot="icon" :src="imgWx"></x-img>
        <div class="content-us-title" slot="title">微信公众号</div>
        <div class="content-us-value" slot="value">富加</div>
      </cell>
      <cell is-link>
        <x-img slot="icon" :src="imgPhone"></x-img>
        <div class="content-us-title" slot="title">联系方式</div>
        <div class="content-us-value" slot="value">400-888688</div>
      </cell>
    </group>
    <div class="about-us-footer">Copyright ©2017 WQT Co., Ltd.All Rights Reserved</div>
  </div>
</template>

<script>
  import XImg from '../../../node_modules/vux/src/components/x-img/index.vue'
  import Cell from '../../../node_modules/vux/src/components/cell/index.vue'
  import Group from '../../../node_modules/vux/src/components/group/index.vue'

  export default {
    components: {
      Group,
      Cell,
      XImg
    },
    name: 'AboutUs',
    data () {
      return {
        img: '/static/images/my/ic_about_us_logo.png',
        imgWx: '/static/images/my/ic_about_us_wechat.png',
        imgPhone: '/static/images/my/ic_about_us_phone.png'
      }
    },
    created: function () {
      this.$root.bus.$emit('showTabbar', false)
    }
  }
</script>

<style>
  .about-us {
    margin-top: 1rem;
    font-size: 0.427rem;
    color: #444;
  }

  .about-us > div {
    padding: 0.2rem;
  }

  .about-us img {
    width: 2.4rem;
    height: 2.4rem;
  }

  .content-us {
    margin-top: 2rem;
  }

  .content-us .vux-cell-bd p {
    margin: 0;
  }

  .content-us img {
    width: 0.667rem;
    height: 0.667rem;
    vertical-align: bottom;
  }

  .content-us-title {
    text-align: left;
    margin-left: 0.32rem;
    font-size: 0.427rem;
    color: #888;
  }

  .content-us-value {
    font-size: 0.427rem;
    color: #444;
  }

  .about-us-footer {
    position: absolute;
    bottom: 0.8rem;
    font-size: 0.32rem;
    color: #888;
    width: 100%;
    text-align: center;
  }
</style>
