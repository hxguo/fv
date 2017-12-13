<template>
  <div>
    <apply-title></apply-title>
    <div style="padding: 1rem;">
      <group class="apply-form">
        <x-input :title="name.title" placeholder="请输入你的姓名" name="username" is-type="china-name">
          <img slot="label" width="20" style="display:block;margin-right:5px;" :src="name.img">
        </x-input>
        <x-input :title="id.title" placeholder="请输入图形码" name="userid">
          <img slot="label" width="20" style="display:block;margin-right:5px;" :src="id.img">
          <img slot="right" :src="imgTxm" style="width: 1.093rem;height: 0.467rem"/>
        </x-input>
        <x-input :title="telephone.title" placeholder="短信验证码" name="telephone" mask="999 9999 9999" :max="13"
                 v-model="maskValue" is-type="china-mobile">
          <img slot="label" width="20" style="display:block;margin-right:5px;" :src="telephone.img">
          <label class="getMsgCode" slot="right">获取验证码</label>
        </x-input>
      </group>
      <x-button style="display: block;width: 100%;height: 1rem;margin: 15px 0;" mini type="warn">提交申请</x-button>
    </div>
  </div>
</template>

<script>
  import ApplyTitle from './ApplyTitle.vue'
  import Group from '../../../node_modules/vux/src/components/group/index.vue'
  import Cell from '../../../node_modules/vux/src/components/cell/index.vue'
  import XInput from '../../../node_modules/vux/src/components/x-input/index.vue'
  import XButton from '../../../node_modules/vux/src/components/x-button/index.vue'

  export default {
    components: {
      XButton,
      XInput,
      Cell,
      Group,
      ApplyTitle
    },
    name: 'SpeedProgress',
    data () {
      return {
        maskValue: '',
        imgTxm: '/static/images/extension/txm.png',
        name: {name: 'apply-name', title: '姓名', value: '', img: '/static/images/extension/ic_name.png'},
        id: {name: 'apply-id', title: '身份证号', value: '', img: '/static/images/extension/ic_code.png'},
        telephone: {name: 'apply-tel', title: '手机号', value: '', img: '/static/images/extension/ic_code.png'}
      }
    }
  }
</script>

<style lang="less">
  .apply-form {
    font-size: 16px;
  }

  .apply-form p {
    margin: 0;
  }

  .apply-form .weui-cell__bd {
    font-size: 0.4rem;
    padding: 0 0.2rem;
  }

  .custom-primary-red {
    border-radius: 99px !important;
    border-color: #CE3C39 !important;
    color: #CE3C39 !important;
    &:active {
      border-color: rgba(206, 60, 57, 0.6) !important;
      color: rgba(206, 60, 57, 0.6) !important;
      background-color: transparent;
    }
  }

  .getMsgCode {
    font-size: 0.4rem;
    color: #CE3C39;
  }
</style>
