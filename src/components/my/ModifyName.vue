<template>
  <div class="modify-name" :style="{'display':isShow}">
    <group>
      <x-input placeholder="请输入要修改的昵称"></x-input>
    </group>
    <group class="save">
      <x-button type="warn">保存</x-button>
    </group>
  </div>
</template>

<script>
  import XInput from '../../../node_modules/vux/src/components/x-input/index.vue'
  import Group from '../../../node_modules/vux/src/components/group/index.vue'
  import XButton from '../../../node_modules/vux/src/components/x-button/index.vue'

  export default {
    props: ['show'],
    components: {
      XButton,
      Group,
      XInput
    },
    name: 'ModifyName',
    data () {
      return {
        isShow: this.show
      }
    }
  }
</script>

<style>
  .modify-name .weui-cells {
    margin-top: 0;
  }

  .modify-name .save {
    margin: 3rem 1rem;
  }
</style>
