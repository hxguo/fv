<template>
  <div class="details-title">
    <cards-swiper class="swiper-left" v-bind:index="swiperLeft"></cards-swiper>
    <cards-swiper v-bind="swiper" v-on:swiperChange="onSwiperChange"></cards-swiper>
    <cards-swiper class="swiper-right" v-bind:index="swiperRight"></cards-swiper>
    <div class="card-name">{{cards[0].name}}</div>
    <abstract-title v-bind="absTitle"></abstract-title>
  </div>
</template>

<script>
  import CardsSwiper from './CardsSwiper.vue'
  import AbstractTitle from './AbstractTitle.vue'

  export default {
    components: {
      AbstractTitle,
      CardsSwiper
    },
    name: 'DetailsTitle',
    data () {
      return {
        swiper: 0,
        swiperLeft: 2,
        swiperRight: 1,
        cards: [
          {
            id: '1',
            name: '交通银行知音金卡',
            abstract: '首年免年费，刷满6笔免次年年费 新用户办卡2000里程轻松享',
            hotNum: '1120.8',
            imgUrl: '/static/images/cards/card_2.png'
          },
          {
            id: '2',
            name: '光大商旅白金卡',
            abstract: '首刷有机会获50元京东E卡 特色专项机场贵宾厅服务',
            hotNum: '1080',
            imgUrl: '/static/images/cards/card_3.png'
          },
          {
            id: '3',
            name: '国航凤凰知音银联金卡',
            abstract: '首年免年费，刷满6笔免次年年费 新用户办卡2000里程轻松享',
            hotNum: '1000',
            imgUrl: '/static/images/cards/card_4.png'
          }
        ],
        absTitle: {
          abstract: '首年免年费，刷满6笔免次年年费 新用户办卡2000里程轻松享',
          fontSize: 0.32
        }
      }
    },
    methods: {
      onSwiperChange: function (index) {
        let left = index - 1
        if (index === 0) {
          left = 2
        }
        this.swiperLeft = left
        let right = index + 1
        if (index === 2) {
          right = 0
        }
        this.swiperRight = right
      }
    }
  }
</script>

<style scoped>
  .details-title {
    position: relative;
  }

  .swiper-left {
    position: absolute;
    top: 0;
    left: -6rem;
    width: 100%;
  }

  .swiper-right {
    position: absolute;
    top: 0;
    right: -6rem;
    width: 100%;
  }

  .card-name {
    font-size: 0.373rem;
    font-weight: bold;
    line-height: 0.6rem;
    text-align: center;
  }

</style>
<style>
</style>
