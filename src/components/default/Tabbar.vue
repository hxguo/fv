<template>
  <div>
    <tabbar class="tabbar" :style="{'z-index':extensionZIndex}">
      <tabbar-item selected link="/">
        <img slot="icon" v-bind:src="homeUrl">
        <img slot="icon-active" v-bind:src="homePrUrl">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item link="/cards/center">
        <img slot="icon" v-bind:src="cardUrl">
        <img slot="icon-active" v-bind:src="cardPrUrl">
        <span slot="label">卡中心</span>
      </tabbar-item>
      <tabbar-item @on-item-click="onExtensionClick">
        <img slot="icon" v-bind:src="generalizePrUrl"
             class="extend">
        <span slot="label">推广</span>
      </tabbar-item>
      <tabbar-item link="/cards/banklist">
        <img slot="icon" v-bind:src="progressUrl">
        <img slot="icon-active" v-bind:src="progressPrUrl">
        <span slot="label">进度查询</span>
      </tabbar-item>
      <tabbar-item link="/my/mine">
        <img slot="icon" v-bind:src="mineUrl">
        <img slot="icon-active" v-bind:src="minePrUrl">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
    <extension v-bind:show="showExtension"></extension>
  </div>
</template>

<script>
  import Tabbar from '../../../node_modules/vux/src/components/tabbar/tabbar.vue'
  import TabbarItem from '../../../node_modules/vux/src/components/tabbar/tabbar-item.vue'
  import Extension from './Extension.vue'

  export default {
    components: {
      Extension,
      TabbarItem,
      Tabbar
    },
    name: 'BottomTabbar',
    data: function () {
      return {
        showExtension: false,
        extensionZIndex: 501,
        homeUrl: '/static/images/default/btn_home.png',
        homePrUrl: '/static/images/default/btn_home_pr.png',
        cardUrl: '/static/images/default/btn_card.png',
        cardPrUrl: '/static/images/default/btn_card_pr.png',
        progressUrl: '/static/images/default/btn_progress.png',
        progressPrUrl: '/static/images/default/btn_progress_pr.png',
        mineUrl: '/static/images/default/btn_mine.png',
        minePrUrl: '/static/images/default/btn_mine_pr.png',
        generalizePrUrl: '/static/images/default/btn_generalize.png'
      }
    },
    methods: {
      onExtensionClick () {
        this.$router.replace('/extension/extension')
      }
    }
  }
</script>

<style scoped>
  .weui-tabbar {
    background: rgb(27, 27, 27);
  }
</style>

<style lang="less">
  .tabbar .extend {
    position: absolute;
    top: -0.6rem;
    left: 50%;
    width: 1.2rem;
    height: 1.2rem;
    margin-left: -0.6rem;
  }

  .weui-tabbar__item {
    color: rgb(190, 190, 190);
    text-decoration: none;
    margin-top: 5px;
  }

  .weui-tabbar__item .weui-tabbar__label {
    font-weight: bold;
    line-height: 0.4;
  }
</style>
