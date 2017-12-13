<template>
  <div>
    <fv-title v-bind="title"></fv-title>
    <cards v-bind:cards="cards"></cards>
  </div>
</template>

<script>
  import FvTitle from './FvTitle.vue'
  import Cards from '../cards/Cards.vue'

  export default {
    props: ['cards'],
    components: {
      Cards,
      FvTitle
    },
    name: 'HotCard',
    data () {
      return {
        title: {
          title: '热卡推荐',
          titleRight: ''
        }
      }
    }
  }
</script>
<style>
</style>
