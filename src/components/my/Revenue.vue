<template>
  <div>
    <revenue-title></revenue-title>
    <revenue-withdrawals></revenue-withdrawals>
    <division></division>
    <revenue-bill></revenue-bill>
    <revenue-list></revenue-list>
  </div>
</template>

<script>
  import RevenueTitle from './RevenueTitle.vue'
  import RevenueWithdrawals from './RevenueWithdrawals.vue'
  import Division from '../default/Division.vue'
  import RevenueBill from './RevenueBill.vue'
  import RevenueList from './RevenueList.vue'

  export default {
    components: {
      RevenueList,
      RevenueBill,
      Division,
      RevenueWithdrawals,
      RevenueTitle
    }
  }
</script>

<style>
</style>
