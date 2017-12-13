<template>
  <div>
    <card-title></card-title>
    <cards v-bind:cards="cards"></cards>
  </div>
</template>

<script>
  import Cards from './Cards.vue'
  import CardTitle from './Title.vue'

  export default {
    components: {
      CardTitle,
      Cards
    },
    name: 'CardCenter',
    data () {
      return {
        cards: [
          {
            id: '1',
            name: '光大淘票票主题卡',
            abstract: '<p>新户核卡即送100元刷卡金</p><p>10元看大片、享汉堡王套餐</p>',
            hotNum: '1150.5',
            imgUrl: '/static/images/cards/card_1.png',
            link: '/cards/details'
          },
          {
            id: '2',
            name: '交通银行知音金卡',
            abstract: '<p>首年免年费，刷满6笔免次年年费</p><p>新用户办卡2000里程轻松享</p>',
            hotNum: '1120.8',
            imgUrl: '/static/images/cards/card_2.png',
            link: '/cards/details'
          },
          {
            id: '3',
            name: '光大商旅白金卡',
            abstract: '<p>首刷有机会获50元京东E卡</p><p>特色专项机场贵宾厅服务</p>',
            hotNum: '1080',
            imgUrl: '/static/images/cards/card_3.png',
            link: '/cards/details'
          },
          {
            id: '4',
            name: '国航凤凰知音银联金卡',
            abstract: '<p>首年免年费，刷满6笔免次年年费</p><p>新用户办卡2000里程轻松享</p>',
            hotNum: '1000',
            imgUrl: '/static/images/cards/card_4.png',
            link: '/cards/details'
          },
          {
            id: '5',
            name: '平安银行信用卡',
            abstract: '<p>新户核卡即送100元刷卡金</p><p>10元看大片、享汉堡王套餐</p>',
            hotNum: '1150.5',
            imgUrl: '/static/images/cards/card_5.png',
            link: '/cards/details'
          },
          {
            id: '6',
            name: '光大银行信用卡-淡墨',
            abstract: '<p>首年免年费，刷满6笔免次年年费</p><p>新用户办卡2000里程轻松享</p>',
            hotNum: '1120.8',
            imgUrl: '/static/images/cards/card_6.png',
            link: '/cards/details'
          },
          {
            id: '7',
            name: '光大银行信用卡-浅紫',
            abstract: '<p>首刷有机会获50元京东E卡</p><p>特色专项机场贵宾厅服务</p>',
            hotNum: '1080',
            imgUrl: '/static/images/cards/card_7.png',
            link: '/cards/details'
          },
          {
            id: '8',
            name: '光大银行信用卡-淡蓝',
            abstract: '<p>首年免年费，刷满6笔免次年年费</p><p>新用户办卡2000里程轻松享</p>',
            hotNum: '1000',
            imgUrl: '/static/images/cards/card_8.png',
            link: '/cards/details'
          }
        ]
      }
    },
    created: function () {
      this.$root.bus.$emit('showTabbar', true)
    }
  }
</script>

<style scoped>


</style>
