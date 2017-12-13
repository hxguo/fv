<template>
  <div class="card-abstract">
    <span :style="{'background-color':(bgColor || '#fb3d38')}"></span>
    <div :style="{'font-size': fontSize + 'rem','color':bgColor}">{{abstract}}</div>
  </div>
</template>

<script>
  export default {
    props: ['abstract', 'fontSize', 'bgColor'],
    name: 'AbstractTitle',
    data () {
      return {}
    }
  }
</script>

<style scoped>
  .card-abstract {
    position: relative;
    background-color: #fff;
  }

  .card-abstract span {
    position: absolute;
    left: 0.3rem;
    top: 0.253rem;
    width: 0.133rem;
    height: 0.4rem;
    background-color: #fb3d38;
  }

  .card-abstract div {
    text-align: left;
    padding: 0.253rem 0.6rem;
  }
</style>
