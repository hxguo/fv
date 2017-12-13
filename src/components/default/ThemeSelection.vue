<template>
  <div>
    <fv-title v-bind="title"></fv-title>
    <grid :cols=2>
      <grid-item class="ts-item-border-bottom ts-item-border-right">
        <div class="ts-item">
          <div class="ts-title">极速办卡 <img v-bind:src="circleNext"></div>
          <div class="ts-small">最快当天下卡</div>
          <img v-bind:src="homeQuick"/>
        </div>
      </grid-item>
      <grid-item class="ts-item-border-bottom">
        <div class="ts-item">
          <div class="ts-title">新手办卡 <img v-bind:src="circleNext"></div>
          <div class="ts-small">首刷送颜值拉杆箱</div>
          <img v-bind:src="homeGift"/>
        </div>
      </grid-item>
      <grid-item class="ts-item-border-right">
        <div class="ts-item">
          <div class="ts-title">大额度 <img v-bind:src="circleNext"></div>
          <div class="ts-small">额度任性 带你飞</div>
          <img v-bind:src="homeQuota"/>
        </div>
      </grid-item>
      <grid-item class="">
        <div class="ts-item">
          <div class="ts-title">车主卡 <img v-bind:src="circleNext"></div>
          <div class="ts-small">加油享折扣</div>
          <img v-bind:src="homeCar"/>
        </div>
      </grid-item>
    </grid>
  </div>
</template>

<script>
  import FvTitle from './FvTitle.vue'
  import Grid from '../../../node_modules/vux/src/components/grid/grid.vue'
  import GridItem from '../../../node_modules/vux/src/components/grid/grid-item.vue'

  export default {
    components: {
      GridItem,
      Grid,
      FvTitle
    },
    name: 'ThemeSelection',
    data () {
      return {
        circleNext: '/static/images/default/btn_circle_next.png',
        homeQuick: '/static/images/default/ic_home_quick.png',
        homeGift: '/static/images/default/ic_home_gift.png',
        homeQuota: '/static/images/default/ic_big_lines.png',
        homeCar: '/static/images/default/ic_car.png',
        title: {
          title: '主题精选',
          titleRight: ''
        }
      }
    }
  }
</script>

<style scoped>
  .weui-grids {
    padding: 0.2rem 0.16rem 0 0.16rem;
  }

  .weui-grid {
    padding: 0.307rem 0.2rem;
    text-align: left;
  }

  .weui-grid:before, .weui-grid:after, .weui-grids:before {
    border: none;
  }

  .weui-grid {
    font-size: 0.373rem;
    font-weight: bold;
    color: rgb(136, 136, 136);
    text-decoration: none;
  }

  a {
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
  }
</style>

<style>
  .ts-item {
    position: relative;
  }

  .ts-item > img {
    position: absolute;
    top: 0;
    right: 10px;
    width: 0.8rem;
    height: 0.8rem;
  }

  .ts-item-padding-top img {
    top: 0.2rem;
  }

  .ts-item-border-bottom {
    border-bottom: 1px solid rgb(241, 241, 241);
  }

  .ts-item-border-right {
    border-right: 1px solid rgb(241, 241, 241);
  }

  .ts-title img {
    width: 0.32rem;
    height: 0.32rem;
    vertical-align: middle;
  }

  .ts-small {
    font-size: 0.253rem;
    font-weight: normal;
    padding: 0.12rem 0;
    color: rgb(190, 190, 190);
  }
</style>
