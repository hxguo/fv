<template>
  <div>
    <group class="apply-form">
      <x-input :title="name.title" placeholder="姓名" name="username" is-type="china-name">
        <img slot="label" width="20" style="display:block;margin-right:5px;" :src="name.img">
      </x-input>
      <x-input :title="id.title" placeholder="身份证号" name="userid">
        <img slot="label" width="20" style="display:block;margin-right:5px;" :src="id.img">
      </x-input>
      <x-input :title="telephone.title" placeholder="手机号码" name="telephone" mask="999 9999 9999" :max="13"
               v-model="maskValue" is-type="china-mobile">
        <img slot="label" width="20" style="display:block;margin-right:5px;" :src="telephone.img">
      </x-input>
    </group>
    <x-button style="margin: 15px 0;" mini type="warn">提交申请</x-button>
  </div>
</template>

<script>
  import Group from '../../../node_modules/vux/src/components/group/index.vue'
  import Cell from '../../../node_modules/vux/src/components/cell/index.vue'
  import XInput from '../../../node_modules/vux/src/components/x-input/index.vue'
  import XButton from '../../../node_modules/vux/src/components/x-button/index.vue'

  export default {
    components: {
      XButton,
      XInput,
      Cell,
      Group
    },
    name: 'ApplyForm',
    data () {
      return {
        maskValue: '13545678910',
        name: {name: 'apply-name', title: '姓名', value: '', img: '/static/images/cards/ic_name.png'},
        id: {name: 'apply-id', title: '身份证号', value: '', img: '/static/images/cards/ic_id.png'},
        telephone: {name: 'apply-tel', title: '手机号', value: '', img: '/static/images/cards/ic_phone.png'}
      }
    }
  }
</script>

<style scoped>
</style>


<style lang="less">
  .apply-form {
    font-size: 16px;
  }

  .apply-form p {
    margin: 0;
  }

  .apply-form .weui-cell__bd{
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
</style>
