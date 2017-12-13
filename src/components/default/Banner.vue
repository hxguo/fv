<template>
  <grid :cols=1>
    <grid-item>
      <img slot="icon" v-bind:src="bannerUrl">
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
    name: 'Banner',
    data () {
      return {
        bannerUrl: '/static/images/default/banner.png'
      }
    },
    mounted: function () {
      this.$nextTick(function () {
        this.$http.get('http://localhost:8060/apis/api/station/banner').then(function (res) {
          console.log(res.data)
          this.gridData = res.data
        })
      })
    }
  }
</script>

<style scoped>
  .weui-grid {
    height: 4rem;
    padding: 0;
  }

  .weui-grid:before, .weui-grid:after {
    border: none;
  }
</style>

<style lang="less">
  .weui-grid .weui-grid__icon {
    width: 100%;
    height: 100%;
  }
</style>
