<template>
  <div class="modify-header" v-transfer-dom>
    <popup v-model="isShow">
      <div class="modify-header">
        <div class="modify-header-select">
          <div class="select-modify">修改</div>
          <div>拍照</div>
          <div class="select-choose">从相册选择</div>
        </div>
        <div class="cancel">取消</div>
      </div>
    </popup>
  </div>
</template>

<script>
  import { TransferDomDirective as TransferDom } from 'vux'
  import Popup from '../../../node_modules/vux/src/components/popup/index.vue'
  import Group from '../../../node_modules/vux/src/components/group/index.vue'
  import XButton from '../../../node_modules/vux/src/components/x-button/index.vue'
  import Divider from '../../../node_modules/vux/src/components/divider/index.vue'

  export default {
    props: ['show'],
    directives: {
      TransferDom
    },
    components: {
      Divider,
      XButton,
      Group,
      Popup
    },
    name: 'ModifyHeader',
    data () {
      return {
        isShow: this.show
      }
    }
  }
</script>

<style>
  .modify-header {
    font-size: 0.48rem;
    color: #444;
    margin: 0 1rem;
  }

  .modify-header .vux-popup-dialog {
    background-color: transparent;
  }

  .modify-header-select {
    border: 1px solid #dddddd;
    border-radius: 5px;
  }

  .modify-header-select > div {
    text-align: center;
    background-color: #fff;
    height: 1.2rem;
    line-height: 1.2rem;
  }

  .select-modify {
    color: #fb3d38;
    border-bottom: 1px solid #dddddd;
  }

  .select-choose {
    border-top: 1px solid #dddddd;
  }

  .cancel {
    text-align: center;
    background-color: #fff;
    height: 1.2rem;
    line-height: 1.2rem;
    margin-top: 0.26rem;
    border: 1px solid #dddddd;
    border-radius: 5px;
  }
</style>
