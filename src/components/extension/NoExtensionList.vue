<template>
  <div class="no-extension-list">
    <img :src="img"/>
    <div>您还未有商户,赶快去推广吧!</div>
  </div>
</template>

<script>
  export default {
    name: 'NoExtensionList',
    data () {
      return {
        img: '/static/images/extension/ic_user_default.png'
      }
    }
  }
</script>

<style>
  .weui-tab {
    background-color: #f1f1f1 !important;
  }

  .no-extension-list img {
    width: 3.64rem;
    height: 2.48rem;
  }

  .no-extension-list {
    font-size: 0.426rem;
    color: #bebebe;
    padding-top: 1rem;
  }
</style>
