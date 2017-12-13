<template>
  <div>
    <banner></banner>
    <hot-bank></hot-bank>
    <division></division>
    <theme-selection></theme-selection>
    <division></division>
    <hot-card v-bind:cards="cards"></hot-card>
  </div>
</template>

<script>
  import Banner from './Banner.vue'
  import HotBank from './HotBank.vue'
  import Division from './Division.vue'
  import ThemeSelection from './ThemeSelection.vue'
  import HotCard from './HotCard.vue'

  export default {
    components: {
      HotCard,
      ThemeSelection,
      Division,
      HotBank,
      Banner
    },
    name: 'Default',
    data () {
      return {
        cards: [
          {
            id: '1',
            name: '光大淘票票主题卡',
            abstract: '<p>新户核卡即送100元刷卡金</p><p>10元看大片、享汉堡王套餐</p>',
            hotNum: '1150.5',
            imgUrl: '/static/images/default/card_gd.png',
            link: '/cards/details'
          },
          {
            id: '2',
            name: '国航凤凰知音银联金卡',
            abstract: '<p>首年免年费，刷满6笔免次年年费</p><p>新用户办卡2000里程轻松享</p>',
            hotNum: '1120.8',
            imgUrl: '/static/images/default/card_gd1.png',
            link: '/cards/details'
          },
          {
            id: '3',
            name: '光大商旅白金卡',
            abstract: '<p>首刷有机会获50元京东E卡</p><p>特色专项机场贵宾厅服务</p>',
            hotNum: '1080',
            imgUrl: '/static/images/default/card_jt.png',
            link: '/cards/details'
          },
          {
            id: '4',
            name: '交通银行知音金卡',
            abstract: '<p>首年免年费，刷满6笔免次年年费</p><p>新用户办卡2000里程轻松享</p>',
            hotNum: '1000',
            imgUrl: '/static/images/default/card_gd.png',
            link: '/cards/details'
          }
        ]
      }
    }
  }
</script>
<style>
</style>
