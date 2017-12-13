<template>
  <view-box>
    <div id="app" :style="{'padding-bottom':paddingBottom}">
      <router-view/>
    </div>
    <bottom-tabbar v-if="showTabbar"></bottom-tabbar>
  </view-box>
</template>

<script>
  import ViewBox from '../node_modules/vux/src/components/view-box/index.vue'
  import BottomTabbar from './components/default/Tabbar.vue'

  export default {
    components: {
      BottomTabbar,
      ViewBox
    },
    name: 'app',
    data () {
      return {
        paddingBottom: '1rem',
        showTabbar: true
      }
    },
    methods: {
      toggleTabbar (toggle) {
        if (toggle) {
          this.paddingBottom = '1rem'
        } else {
          this.paddingBottom = '0'
        }
        this.showTabbar = toggle
      }
    },
    created: function () {
      this.$root.bus.$on('showTabbar', value => {
        this.toggleTabbar(value)
      })
      this.toggleTabbar(true)
    }
  }
</script>

<style lang="less">
  @import "styles/setting";

  html, body {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
    overflow-x: hidden;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
