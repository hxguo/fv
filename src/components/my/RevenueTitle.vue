<template>
  <div class="revenue">
    <grid class="details">
      <grid-item class="revenue-details-total">
        <div>{{totalIncome}}</div>
        <div class="revenue-details-total-title">{{totalIncomeTitle}}</div>
      </grid-item>
      <grid-item class="revenue-details-history">
        <div>{{historyIncome}}</div>
        <div class="revenue-details-history-title">{{historyIncomeTitle}}</div>
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
    name: 'RevenueTitle',
    data () {
      return {
        totalIncome: '628224.0',
        totalIncomeTitle: '总收入(元)',
        historyIncome: '7224.0',
        historyIncomeTitle: '历史收益(元)'
      }
    }
  }
</script>

<style>
  .revenue {
    font-size: 0.667rem;
    color: #fb3d38;
    background-color: #1b1b1b;
  }

  .revenue .details {
    padding: 1rem 0;
  }

  .revenue .details:after, .revenue .details:before {
    border: none;
  }

  .revenue .details a {
    color: #fb3d38;
    text-decoration: none;
  }

  .details .revenue-details-total-title {
    font-size: 0.373rem;
    color: #bebebe;
  }

  .details .revenue-details-history-title {
    font-size: 0.373rem;
    color: #bebebe;
  }

  .details:after, .details:before {
    border: none;
  }

  .details a, .details a:before, .details a:after {
    border-bottom: none;
  }

  .details .revenue-details-history:before {
    border-right: none;
  }
</style>
