<template>
  <div class="wx-code" v-transfer-dom>
    <popup v-model="isShow">
      <div>
        <x-img class="wx-code-img" :src="img" :defaultSrc="img"></x-img>
      </div>
    </popup>
  </div>
</template>

<script>
  import { TransferDomDirective as TransferDom } from 'vux'
  import Popup from '../../../node_modules/vux/src/components/popup/index.vue'
  import XImg from '../../../node_modules/vux/src/components/x-img/index.vue'

  export default {
    props: ['show'],
    directives: {
      TransferDom
    },
    components: {
      XImg,
      Popup
    },
    name: 'WxCode',
    data () {
      return {
        isShow: this.show,
        img: '/static/images/my/qrcode.png'
      }
    }
  }
</script>

<style>
  .wx-code {
    height: 100%;
    text-align: center;
  }

  .wx-code .vux-popup-dialog {
    height: 100% !important;
    background-color: transparent;
  }

  .wx-code-img {
    margin-top: 1.693rem;
    width: 8.827rem;
    height: 11.72rem;
  }
</style>
