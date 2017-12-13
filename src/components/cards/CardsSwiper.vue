<template>
  <swiper
    class="swiper"
    :style="{'line-height':swiperHeight}"
    :loop="true"
    :show-dots=false
    :aspect-ratio="300/800"
    v-model="index"
    @on-get-height="onGetHeight"
    @on-index-change="onSwiperIndexChange"
  >
    <swiper-item class="swiper-img" v-for="(item, index) in cards" :key="index">
      <img :src="item.imgUrl">
    </swiper-item>
  </swiper>
</template>

<script>
  import Swiper from '../../../node_modules/vux/src/components/swiper/swiper.vue'
  import SwiperItem from '../../../node_modules/vux/src/components/swiper/swiper-item.vue'

  export default {
    props: ['index'],
    components: {
      SwiperItem,
      Swiper
    },
    name: 'CardsSwiper',
    data () {
      return {
        swiperHeight: 180,
        swiperIndex: this.index,
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
        ]
      }
    },
    methods: {
      onSwiperIndexChange (index) {
        this.$emit('swiperChange', index)
        this.swiperIndex = index
      },
      onGetHeight (height) {
        this.swiperHeight = height
      }
    }
  }
</script>

<style scoped>
  .swiper {
    padding: 0.232rem 0;
  }

  .swiper-img img {
    vertical-align: middle;
  }
</style>
