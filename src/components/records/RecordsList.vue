<template>
  <div>
    <group v-for="(item,index) in records.infoList" :key="item.id" class="records-list">
      <abstract-title v-bind="records.absTitle"></abstract-title>
      <div class="right-label">{{item.name}}</div>
      <flexbox class="">
        <flexbox-item :span="3" style="text-align: right">申请人：</flexbox-item>
        <flexbox-item>{{item.name}}</flexbox-item>
      </flexbox>
      <flexbox>
        <flexbox-item :span="3" style="text-align: right">来源：</flexbox-item>
        <flexbox-item>{{item.name}}</flexbox-item>
      </flexbox>
      <flexbox>
        <flexbox-item :span="3" style="text-align: right">证件号码：</flexbox-item>
        <flexbox-item>{{item.identity}}</flexbox-item>
      </flexbox>
      <flexbox>
        <flexbox-item :span="3" style="text-align: right">手机号码：</flexbox-item>
        <flexbox-item>{{item.telephone}}</flexbox-item>
      </flexbox>
      <flexbox>
        <flexbox-item :span="3" style="text-align: right">浏览时间：</flexbox-item>
        <flexbox-item>{{item.telephone}}</flexbox-item>
      </flexbox>
    </group>
  </div>
</template>

<script>
  import FvTitle from '../default/FvTitle.vue'
  import AbstractTitle from '../cards/AbstractTitle.vue'
  import Group from '../../../node_modules/vux/src/components/group/index.vue'
  import Flexbox from '../../../node_modules/vux/src/components/flexbox/flexbox.vue'
  import FlexboxItem from '../../../node_modules/vux/src/components/flexbox/flexbox-item.vue'
  import Cell from '../../../node_modules/vux/src/components/cell/index.vue'

  export default {
    props: ['records'],
    components: {
      Cell,
      FlexboxItem,
      Flexbox,
      Group,
      AbstractTitle,
      FvTitle
    },
    name: 'RecordsList',
    data () {
      return {}
    }
  }
</script>
<style scoped>
</style>
<style>
  .right-label {
    display: inline-block;
    background-color: #00a0e9;
    color: #fff;
    position: absolute;
    top: 0;
    right: 0.5rem;
    width: 0.5rem;
    font-size: 0.32rem;
    padding: 0.26rem 0.16rem;
  }

  .records-list {
    position: relative;
  }

  .records-list .weui-cells {
    padding-bottom: 0.2rem;
  }

  .records-list .weui-cells, .weui-cells:before {
    border-top: none !important;
    margin-top: 0 !important;
  }

  .records-list {
    font-size: 0.373rem;
  }

  .records-list .vux-flexbox-item {
    font-size: 0.32rem !important;
  }

  .records-list .vux-flex-row {
    padding-bottom: 0.24rem;
  }
</style>
