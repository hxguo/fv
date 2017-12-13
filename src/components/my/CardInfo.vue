<template>
  <div>
    <abstract-title v-bind="absTitle"></abstract-title>
    <division></division>
    <group class="card-info-form">
      <x-input placeholder="持卡人" style="border: none">
        <div class="card-info-form-title" slot="label">持 卡 人</div>
      </x-input>
      <x-input placeholder="身份证号">
        <div class="card-info-form-title" slot="label">身份证号</div>
      </x-input>
      <x-input placeholder="预留手机">
        <div class="card-info-form-title" slot="label">预留手机</div>
      </x-input>
    </group>
    <division></division>
    <group class="card-info-form">
      <x-input placeholder="填写银行卡卡号" style="border: none">
        <div class="card-info-form-title" slot="label">银行卡号</div>
      </x-input>
      <x-input placeholder="银行卡所属银行">
        <div class="card-info-form-title" slot="label">所属银行</div>
      </x-input>
    </group>
    <div class="card-info-button">
      <x-button type="warn" disabled>提 交</x-button>
    </div>
  </div>
</template>

<script>
  import AbstractTitle from '../cards/AbstractTitle.vue'
  import Division from '../default/Division.vue'
  import Group from '../../../node_modules/vux/src/components/group/index.vue'
  import XInput from '../../../node_modules/vux/src/components/x-input/index.vue'
  import XButton from '../../../node_modules/vux/src/components/x-button/index.vue'

  export default {
    components: {
      XButton,
      XInput,
      Group,
      Division,
      AbstractTitle
    },
    name: 'CardInfo',
    data () {
      return {
        absTitle: {
          abstract: '请绑定持卡人本人的储蓄卡',
          fontSize: 0.373
        }
      }
    },
    created: function () {
      this.$root.bus.$emit('showTabbar', false)
    }
  }
</script>

<style>
  .weui-tab {
    background-color: rgb(241, 241, 241);
  }

  .weui-cell {
    border-top: 1px solid #D9D9D9;
  }

  .card-info-form {
    color: rgb(68, 68, 68);
  }

  .card-info-form .weui-cell:after, .card-info-form .weui-cell:before {
    border: none;
  }

  .card-info-form .weui-cells {
    margin-top: 0;
  }

  .card-info-form-title {
    font-size: 0.427rem;
    color: rgb(136, 136, 136);
    padding-right: 0.4rem;
    min-width: 1.8rem;
    text-align: center;
  }

  .card-info-button {
    margin: 1rem 0.5rem;
  }
</style>
