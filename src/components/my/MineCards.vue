<template>
  <div>
    <mine-no-cards v-if="noCards"></mine-no-cards>
    <mine-has-cards v-if="hasCards"></mine-has-cards>
  </div>
</template>

<script>
  import MineNoCards from './MineNoCards.vue'
  import MineHasCards from './MineHasCards.vue'

  export default {
    components: {
      MineHasCards,
      MineNoCards
    },
    name: 'MineCards',
    data () {
      return {
        noCards: false,
        hasCards: true
      }
    },
    created: function () {
      this.$root.bus.$emit('showTabbar', false)
    }
  }
</script>

<style>
</style>
