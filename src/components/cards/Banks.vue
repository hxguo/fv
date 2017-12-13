<template>
  <popup position="top" v-model="show" @on-hide="log('hide')" @on-show="log('show')">
    <div class="popup0">
      <group>
        <x-switch v-for="item in banks" v-bind:title="item.nameCn" :key="item.id"></x-switch>
      </group>
    </div>
  </popup>
</template>

<script>
  import Popup from '../../../node_modules/vux/src/components/popup/index.vue'
  import Group from '../../../node_modules/vux/src/components/group/index.vue'
  import XSwitch from '../../../node_modules/vux/src/components/x-switch/index.vue'

  export default {
    components: {
      XSwitch,
      Group,
      Popup
    },
    name: 'BanksList',
    data () {
      return {
        show: true,
        banks: [
          {id: '1000', name: 'zsyh', nameCn: '招商银行'},
          {id: '2000', name: 'msyh', nameCn: '民生银行'},
          {id: '3000', name: 'hxyh', nameCn: '华夏银行'},
          {id: '4000', name: 'jtyh', nameCn: '交通银行'},
          {id: '5000', name: 'xyyh', nameCn: '兴业银行'},
          {id: '6000', name: 'gdyh', nameCn: '光大银行'},
          {id: '7000', name: 'pfyh', nameCn: '浦发银行'},
          {id: '8000', name: 'shyh', nameCn: '上海银行'}
        ]
      }
    }
  }
</script>

<style scoped>

</style>
