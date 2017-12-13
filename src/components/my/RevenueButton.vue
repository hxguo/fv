<template>
  <div style="padding: 0 1rem;">
    <grid class="revenue-button">
      <grid-item class="revenue-button-active" style="border-top-left-radius: 5px;border-bottom-left-radius: 5px;">
        准分润
      </grid-item>
      <grid-item>
        分润
      </grid-item>
      <grid-item>
        返佣
      </grid-item>
      <grid-item style="border-top-right-radius: 5px;border-bottom-right-radius: 5px;">
        提现
      </grid-item>
    </grid>
  </div>
</template>

<script>
  import Grid from '../../../node_modules/vux/src/components/grid/grid.vue'
  import GridItem from '../../../node_modules/vux/src/components/grid/grid-item.vue'

  export default {
    components: {
      GridItem,
      Grid
    },
    name: 'RevenueButton'
  }
</script>

<style>
  .revenue-button {
    font-size: 0.373rem;
    color: #888888;
    border-radius: 5px;
  }

  .revenue-button a {
    font-size: 0.373rem;
    text-decoration: none;
    color: #888888;
    padding: 0.147rem 0.1rem;
  }

  .revenue-button .revenue-button-active {
    background-color: #fb7e4a;
    color: #fff;
  }

</style>
