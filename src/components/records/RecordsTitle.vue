<template>
  <tab class="records-tab">
    <tab-item class="records-tab-item" :style="{'background-color':confirmColor}" @on-item-click="onItemClick">
      <span>{{confirmTitle}}</span>
    </tab-item>
    <tab-item class="records-tab-item" :style="{'background-color':checkingColor}" @on-item-click="onItemClick">
      <span>{{checkingTitle}}</span>
    </tab-item>
    <tab-item class="records-tab-item" :style="{'background-color':successColor}" @on-item-click="onItemClick">
      <span>{{successTitle}}</span>
    </tab-item>
    <tab-item class="records-tab-item" :style="{'background-color':closeColor}" @on-item-click="onItemClick">
      <span>{{closeTitle}}</span>
    </tab-item>
  </tab>
</template>

<script>
  import Tab from '../../../node_modules/vux/src/components/tab/tab.vue'
  import TabItem from '../../../node_modules/vux/src/components/tab/tab-item.vue'

  export default {
    props: ['bgColor'],
    components: {
      TabItem,
      Tab
    },
    name: 'RecordsTitle',
    data () {
      return {
        confirmTitle: '待确认',
        checkingTitle: '待审核',
        successTitle: '申请成功',
        closeTitle: '关闭',
        confirmColor: '#facd89',
        checkingColor: '#1b1b1b',
        successColor: '#1b1b1b',
        closeColor: '#1b1b1b'
      }
    },
    methods: {
      onItemClick (index) {
        if (index === 0) {
          this.confirmColor = '#facd89'
          this.checkingColor = '#1b1b1b'
          this.successColor = '#1b1b1b'
          this.closeColor = '#1b1b1b'
        }
        if (index === 1) {
          this.confirmColor = '#1b1b1b'
          this.checkingColor = '#fecb2f'
          this.successColor = '#1b1b1b'
          this.closeColor = '#1b1b1b'
        }
        if (index === 2) {
          this.confirmColor = '#1b1b1b'
          this.checkingColor = '#1b1b1b'
          this.successColor = '#22ac38'
          this.closeColor = '#1b1b1b'
        }
        if (index === 3) {
          this.confirmColor = '#1b1b1b'
          this.checkingColor = '#1b1b1b'
          this.successColor = '#1b1b1b'
          this.closeColor = '#fb3d38'
        }
        this.$emit('tabChange', index)
      }
    }
  }
</script>

<style scoped>
  .records-tab {
    height: 1.2rem;
    background: #1b1b1b;
    z-index: 502;
  }

  .records-tab .records-tab-item {
    font-size: 0.45rem;
    color: #fff;
    background: none;
    line-height: 1.2rem;
  }

  .vux-tab .vux-tab-item.vux-tab-selected {
    color: #fff;
  }

</style>
<style>
  .records-tab .vux-tab-ink-bar {
    display: none !important;
    background-color: #1b1b1b;
  }


</style>
