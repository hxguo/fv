<template>
  <div class="revenue-bill">
    <abstract-title v-bind="absTitle"></abstract-title>
    <revenue-button></revenue-button>
  </div>
</template>

<script>
  import AbstractTitle from '../cards/AbstractTitle.vue'
  import RevenueButton from './RevenueButton.vue'

  export default {
    components: {
      RevenueButton,
      AbstractTitle
    },
    name: 'RevenueBill',
    data () {
      return {
        absTitle: {
          abstract: '我的账单',
          fontSize: 0.373
        }
      }
    }
  }
</script>

<style>
  .revenue-bill {
    padding: 0.23rem 0.4rem;
  }
</style>
