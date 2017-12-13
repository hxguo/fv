<template>
  <div class="apply">
    <router-link to="/cards/apply">
      <img :src="applyImg"/> 立即申请
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'ButtonApply',
    data () {
      return {
        applyImg: '/static/images/cards/btn_apply_for.png',
        apply: '/cards/apply'
      }
    }
  }
</script>

<style>
  .apply {
    position: fixed;
    bottom: 0;
    font-size: 0.427rem;
    font-weight: bold;
    height: 1.333rem;
    line-height: 1.333rem;
    width: 100%;
    color: #fff;
    background-color: #fb3d38;
    text-align: center;
  }

  .apply a {
    display: inline-block;
    height: 0.587rem;
    line-height: 0.587rem;
    color: #fff;
    text-decoration: none;
  }

  .apply img {
    width: 0.533rem;
    height: 0.587rem;
    vertical-align: bottom;
  }
</style>
