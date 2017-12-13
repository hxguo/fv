<template>
  <div class="mine-title" :style="background">
    <cell is-link :link="user.detail">
      <div class="mine-info" slot="title">
        <x-img class="mine-img" :defaultSrc="user.img" :src="user.img"></x-img>
        <div class="mine-user">
          <div class="mine-name">{{user.name}}</div>
          <div class="mine-telephone">{{user.telephone}}</div>
          <div class="mine-level">{{user.level}}</div>
        </div>
      </div>
    </cell>
  </div>
</template>

<script>
  import XImg from '../../../node_modules/vux/src/components/x-img/index.vue'
  import Cell from '../../../node_modules/vux/src/components/cell/index.vue'

  export default {
    components: {
      Cell,
      XImg
    },
    name: 'MineTitle',
    data () {
      return {
        user: {
          name: 'Mr.beard',
          telephone: '180 ****4573',
          level: '列兵',
          img: '/static/images/my/ic_user.png',
          detail: '/my/mineinfo'
        },
        background: {
          backgroundImage: 'url(/static/images/my/user_bg.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%'
        }
      }
    }
  }
</script>

<style>
  .mine-title {
    position: relative;
    width: 10rem;
    height: 3rem;
  }

  .mine-title .weui-cell {
    padding: 0;
  }

  .mine-title .vux-label {
    text-align: left;
  }

  .mine-title .vux-cell-bd p {
    margin: 0;
  }

  .mine-info {
    position: relative;
  }

  .mine-title .mine-img {
    width: 1.8rem;
    height: 1.8rem;
    padding: 0.6rem 0.3rem;
  }

  .mine-user {
    position: absolute;
    top: 0.3rem;
    left: 2.5rem;
    font-size: 0.32rem;
    color: #fff;
    height: 1.8rem;
  }

  .mine-name {
    font-size: 0.567rem;
    padding: 0.2rem 0;
  }

  .mine-telephone {
    padding-bottom: 0.2rem;
  }

  .mine-level {
    display: inline-block;
    padding: 0.1rem 0.2rem;
    background-color: #fb3d38;
  }
</style>
