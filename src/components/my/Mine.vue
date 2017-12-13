<template>
  <div>
    <mine-title></mine-title>
    <mine-data></mine-data>
    <division></division>
    <mine-menu></mine-menu>
    <division></division>
    <mine-bottom></mine-bottom>
    <mine-footer></mine-footer>
  </div>
</template>

<script>
  import MineTitle from './MineTitle.vue'
  import MineData from './MineData.vue'
  import Division from '../default/Division.vue'
  import MineMenu from './MineMenu.vue'
  import MineBottom from './MineBottom.vue'
  import MineFooter from './MineFooter.vue'

  export default {
    components: {
      MineFooter,
      MineBottom,
      MineMenu,
      Division,
      MineData,
      MineTitle
    },
    name: 'Mine'
  }
</script>

<style>
</style>
