<template>
  <group-title slot="title">
    <span class="fv-title">{{title}}</span>
    <span v-if="titleRight !== ''" class="fv-title-right">{{titleRight}}</span>
  </group-title>
</template>

<script>
  import Group from '../../../node_modules/vux/src/components/group/index.vue'
  import GroupTitle from '../../../node_modules/vux/src/components/group-title/index.vue'

  export default {
    props: ['title', 'titleRight'],
    components: {
      GroupTitle,
      Group
    },
    name: 'FvTitle'
  }
</script>
<style scoped>
  .weui-cells__title {
    text-align: left;
  }
</style>
<style lang="less">
  .fv-title {
    font-size: 0.373rem;
    font-weight: bold;
    font-style: italic;
    color: rgb(68, 68, 68);
    border-bottom: 0.06rem solid rgb(251, 61, 56);
  }

  .fv-title-right {
    float: right;
    font-size: 0.32rem;
    font-weight: bold;
    color: rgb(190, 190, 190);
    margin-top: 0.08rem;
  }
</style>
