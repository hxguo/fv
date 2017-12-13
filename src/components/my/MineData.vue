<template>
  <grid class="mine-data">
    <grid-item link="/my/revenue">
      <div class="data-num">{{total}}</div>
      <div class="data-title">总收入</div>
    </grid-item>
    <grid-item link="/my/revenue">
      <div class="data-num">{{now}}</div>
      <div class="data-title">可提现</div>
    </grid-item>
    <grid-item link="/my/revenue">
      <div class="data-num">{{history}}</div>
      <div class="data-title">历史收益</div>
    </grid-item>
  </grid>
</template>

<script>
  import Grid from '../../../node_modules/vux/src/components/grid/grid.vue'
  import GridItem from '../../../node_modules/vux/src/components/grid/grid-item.vue'

  export default {
    components: {
      GridItem,
      Grid
    },
    name: 'MineData',
    data () {
      return {
        total: '0.00',
        now: '0.00',
        history: '0.00'
      }
    }
  }
</script>

<style>
  .mine-data {

  }

  .mine-data a {
    padding: 0.28rem 0;
    text-decoration: none;
  }

  .data-num {
    font-size: 0.479rem;
    color: #fb3d38;
  }

  .data-title {
    font-size: 0.266rem;
    color: #888888;
  }
</style>
