<template>
  <view-box class="details-box">
    <details-title></details-title>
    <division></division>
    <details-content></details-content>
    <button-apply></button-apply>
  </view-box>
</template>

<script>
  import DetailsContent from './DetailsContent.vue'
  import ButtonApply from './ButtonApply.vue'
  import ViewBox from '../../../node_modules/vux/src/components/view-box/index.vue'
  import Division from '../default/Division.vue'
  import DetailsTitle from './DetailsTitle.vue'

  export default {
    components: {
      DetailsTitle,
      Division,
      ViewBox,
      ButtonApply,
      DetailsContent
    },
    name: 'Details',
    created: function () {
      this.$root.bus.$emit('showTabbar', false)
    }
  }
</script>

<style>
  .details-box .weui-tab__panel {
    padding-bottom: 0;
  }
</style>
