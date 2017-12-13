<template>
  <div>
    <apply-title></apply-title>
    <grid :cols=4>
      <grid-item v-for="item in banks" :key="item.id" link="/cards/speedprogress">
        <div style="border: 1px solid #ddd; border-radius: 5px; padding: 0.3rem;">
          <img slot="icon" style="width: 1rem;height: 1rem;" v-bind:src="item.img"/>
          <div slot="label">{{item.nameCn}}</div>
        </div>
      </grid-item>
    </grid>
  </div>
</template>

<script>
  import Grid from '../../../node_modules/vux/src/components/grid/grid.vue'
  import GridItem from '../../../node_modules/vux/src/components/grid/grid-item.vue'
  import ApplyTitle from './ApplyTitle.vue'
  export default {
    components: {
      ApplyTitle,
      GridItem,
      Grid
    },
    name: 'BankList',
    data () {
      return {
        banks: [
          {id: '1000', name: 'zsyh', nameCn: '招商银行', img: '/static/images/default/ic_zhaoshang.png', url: ''},
          {id: '2000', name: 'msyh', nameCn: '民生银行', img: '/static/images/default/ic_minsheng.png', url: ''},
          {id: '3000', name: 'hxyh', nameCn: '华夏银行', img: '/static/images/default/ic_huaxia.png', url: ''},
          {id: '4000', name: 'jtyh', nameCn: '交通银行', img: '/static/images/default/ic_jiaotong.png', url: ''},
          {id: '5000', name: 'xyyh', nameCn: '兴业银行', img: '/static/images/default/ic_xingye.png', url: ''},
          {id: '6000', name: 'gdyh', nameCn: '光大银行', img: '/static/images/default/ic_guangda.png', url: ''},
          {id: '7000', name: 'pfyh', nameCn: '浦发银行', img: '/static/images/default/ic_pufa.png', url: ''},
          {id: '8000', name: 'shyh', nameCn: '上海银行', img: '/static/images/default/ic_shanghai.png', url: ''},
          {id: '9000', name: 'zsyh', nameCn: '招商银行', img: '/static/images/default/ic_zhaoshang.png', url: ''},
          {id: '1000', name: 'msyh', nameCn: '民生银行', img: '/static/images/default/ic_minsheng.png', url: ''},
          {id: '1100', name: 'hxyh', nameCn: '华夏银行', img: '/static/images/default/ic_huaxia.png', url: ''},
          {id: '1200', name: 'jtyh', nameCn: '交通银行', img: '/static/images/default/ic_jiaotong.png', url: ''},
          {id: '1300', name: 'xyyh', nameCn: '兴业银行', img: '/static/images/default/ic_xingye.png', url: ''},
          {id: '1400', name: 'gdyh', nameCn: '光大银行', img: '/static/images/default/ic_guangda.png', url: ''},
          {id: '1500', name: 'pfyh', nameCn: '浦发银行', img: '/static/images/default/ic_pufa.png', url: ''},
          {id: '1600', name: 'shyh', nameCn: '上海银行', img: '/static/images/default/ic_shanghai.png', url: ''}
        ]
      }
    }
  }
</script>

<style scoped>
  .weui-grids {
    padding: 0 0.15rem;
  }

  .weui-grid {
    padding: 0.15rem 0.15rem 0 0.15rem;
  }

  .weui-grid:before, .weui-grid:after, .weui-grids:before {
    border: none;
  }
  .weui-grid {
    font-size: 0.271rem;
    font-weight: bold;
    color: rgb(68, 68, 68);
    text-decoration: none;
  }

  a {
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
  }
</style>
<style lang="less">

</style>
