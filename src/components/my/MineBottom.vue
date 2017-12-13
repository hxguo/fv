<template>
  <grid class="mine-bottom">
    <grid-item v-for="(item,index) in bottoms" :key="item.id">
      <div class="mine-bottom-img">
        <x-img :src="item.img" :defaultSrc="item.img"></x-img>
      </div>
      <div class="mine-bottom-msg" v-html="item.name">
      </div>
    </grid-item>
  </grid>
</template>

<script>
  import Grid from '../../../node_modules/vux/src/components/grid/grid.vue'
  import GridItem from '../../../node_modules/vux/src/components/grid/grid-item.vue'
  import XImg from '../../../node_modules/vux/src/components/x-img/index.vue'

  export default {
    components: {
      XImg,
      GridItem,
      Grid
    },
    name: 'MineBottom',
    data () {
      return {
        bottoms: [
          {id: '1', name: '<div>严格甄选</div><div>优质产品</div>', img: '/static/images/my/ic_bottom_left.png'},
          {id: '2', name: '<div>极速办卡</div><div>便捷流程</div>', img: '/static/images/my/ic_bottom_middle.png'},
          {id: '3', name: '<div>信息安全</div><div>数据加密</div>', img: '/static/images/my/ic_bottom_right.png'}
        ]
      }
    }
  }
</script>

<style>
  .mine-bottom {
    font-size: 0.267rem;
    color: #ccc;
  }

  .mine-bottom a {
    color: #ccc;
    text-decoration: none;
  }

  .mine-bottom-img {
    display: inline-block;
  }

  .mine-bottom-img img {

    width: 0.653rem;
    height: 0.667rem;
  }

  .mine-bottom-msg {
    display: inline-block;
  }

  .mine-bottom-msg div {
    padding: 0.1rem;
  }

  .mine-bottom .weui-grid:before, .mine-bottom .weui-grid:after {
    border: none;
  }
</style>
