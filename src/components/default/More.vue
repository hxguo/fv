<template>
  <group-title class="more">
    <a>
      <span>查看更多</span>
      <img v-bind:src="imgDown">
    </a>
  </group-title>
</template>

<script>
  import GroupTitle from '../../../node_modules/vux/src/components/group-title/index.vue'

  export default {
    components: {
      GroupTitle
    },
    name: 'More',
    data () {
      return {
        imgDown: '/static/images/default/ic_down.png'
      }
    }
  }
</script>

<style scoped>
  .weui-cells__title {
    margin-bottom: 0.77em;
  }

  a:active {
    background: #ECECEC;
  }

  a {
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
  }
</style>

<style>
  a {
    display: inline;
    padding: 0.2rem 0.4rem;
  }

  .more span {
    font-size: 0.3rem;
  }

  .more img {
    width: 0.213rem;
    height: 0.133rem;
  }
</style>
