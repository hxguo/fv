<template>
  <div class="no-records-list">
    <img :src="img"/>
    <div>您还未有待确认申请!</div>
  </div>
</template>

<script>
  export default {
    name: 'NoRecordsList',
    data () {
      return {
        img: '/static/images/extension/ic_record_default.png'
      }
    }
  }
</script>

<style>
  .weui-tab {
    background-color: #f1f1f1 !important;
  }

  .no-records-list img {
    width: 3.64rem;
    height: 2.48rem;
  }

  .no-records-list {
    font-size: 0.426rem;
    color: #bebebe;
    padding-top: 1rem;
  }
</style>
