<template>
  <div style="margin-top: 10px;">
    <abstract-title v-bind="absTitle"></abstract-title>
    <group class="apply-list">
      <cell primary="content" v-for="(item,index) in infoList" :key="item.id" :title="item.name" is-link
            arrow-direction="up">
        <span slot="icon">{{index + 1}}</span>
        <div class="apply-list-info" slot="value">
          <p>身份证号： {{item.identity}}</p>
          <p>手机号码： {{item.telephone}}</p>
        </div>
      </cell>
    </group>
  </div>
</template>

<script>
  import AbstractTitle from './AbstractTitle.vue'
  import Group from '../../../node_modules/vux/src/components/group/index.vue'
  import Cell from '../../../node_modules/vux/src/components/cell/index.vue'

  export default {
    components: {
      Cell,
      Group,
      AbstractTitle
    },
    name: 'ApplyInfoList',
    data () {
      return {
        absTitle: {
          abstract: '已保存的申请人信息',
          fontSize: 0.373
        },
        infoList: [
          {id: '1', name: '戴大大', identity: '350321199056322224', telephone: '18032394890'},
          {id: '2', name: 'Adi', identity: '350321199056322224', telephone: '18032394890'},
          {id: '3', name: '大风丸', identity: '350321199056322224', telephone: '18032394890'},
          {id: '4', name: '阿尔法', identity: '350321199056322224', telephone: '18032394890'},
          {id: '5', name: '斯蒂芬', identity: '350321199056322224', telephone: '18032394890'}
        ]
      }
    }
  }
</script>

<style>
  .apply-list {
    font-size: 0.347rem;
  }

  .apply-list p {
    margin: 0;
    font-size: 0.347rem;
  }

  .apply-list .vux-cell-bd {
    min-width: 1.5rem;
  }

  .apply-list .weui-cell__hd {
    display: inline-block;
    font-size: 0.347rem;
    padding: 0 0.3rem;
  }

  .apply-list-info {
    font-size: 0.32rem;
    color: #444444;
    text-align: left;
    padding: 0 0.5rem;
  }
</style>
