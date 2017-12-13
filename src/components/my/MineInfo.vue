<template>
  <div>
    <group class="mine-info" :style="{'display':showInfo}">
      <cell title="头像">
        <x-img class="mine-info-img" slot="value" :src="info.img"></x-img>
      </cell>
      <cell title="昵称" is-link>{{info.name}}</cell>
      <cell title="上传微信二维码" is-link></cell>
      <division></division>
      <cell class="no-border-top" title="完善资料" is-link></cell>
      <modify-header v-bind:show="showHeader"></modify-header>
      <wx-code v-bind:show="showWxCode"></wx-code>
    </group>
    <modify-name v-bind:show="showName"></modify-name>
  </div>
</template>

<script>
  import Group from '../../../node_modules/vux/src/components/group/index.vue'
  import Cell from '../../../node_modules/vux/src/components/cell/index.vue'
  import XImg from '../../../node_modules/vux/src/components/x-img/index.vue'
  import Division from '../default/Division.vue'
  import ModifyHeader from './ModifyHeader.vue'
  import ModifyName from './ModifyName.vue'
  import WxCode from './WxCode.vue'

  export default {
    components: {
      WxCode,
      ModifyName,
      ModifyHeader,
      Division,
      XImg,
      Cell,
      Group
    },
    name: 'MineInfo',
    data () {
      return {
        info: {
          img: '/static/images/my/ic_level1.png',
          name: 'Mr.beard',
          wx: '',
          detail: ''
        },
        showHeader: false,
        showWxCode: false,
        showName: 'none',
        showInfo: 'block'
      }
    },
    created: function () {
      this.$root.bus.$emit('showTabbar', false)
    }
  }
</script>

<style>
  .weui-tab {
    background-color: #f1f1f1;
  }

  .mine-info {
    font-size: 0.427rem;
    color: #444444;
  }

  .mine-info .weui-cells {
    margin-top: 0;
  }

  .mine-info .vux-cell-bd {
    text-align: left;
  }

  .mine-info .no-border-top:after, .mine-info .no-border-top:before {
    border-top: none;
  }

  .mine-info .vux-cell-bd p {
    margin: 0;
  }

  .mine-info-img {
    width: 1.6rem;
    height: 1.6rem;
  }

  .mine-info .weui-cell {
    font-size: 0.427rem;
  }
</style>
