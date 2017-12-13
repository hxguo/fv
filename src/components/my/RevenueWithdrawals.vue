<template>
  <div class="withdrawals">
    <div class="withdrawals-cash">
      <div class="withdrawals-cash-left">
        <div class="withdrawals-cash-left-up">
          7224.0
        </div>
        <div class="withdrawals-cash-left-down">
          可提现(元)
        </div>
      </div>
      <div class="withdrawals-cash-right">
        <x-button mini type="warn" link="/my/withdrawals">提现</x-button>
      </div>
    </div>
    <div class="withdrawals-history">
      <div class="withdrawals-history-left">历史已提现(元)</div>
      <div class="withdrawals-history-right">8253.0</div>
    </div>
  </div>
</template>

<script>
  import { TransferDomDirective as TransferDom } from 'vux'
  import XButton from '../../../node_modules/vux/src/components/x-button/index.vue'

  export default {
    directives: {
      TransferDom
    },
    components: {
      XButton
    },
    name: 'RevenueWithdrawals',
    methods: {
      showModule () {
        this.$vux.confirm.show({
          title: '提示',
          content: '您还未绑定结算卡哦,请前往结算卡页面进行绑定.',
          confirmText: '立即前往',
          onShow () {
            console.log('plugin show')
          },
          onHide () {
            console.log('plugin hide')
          },
          onCancel () {
            console.log('plugin cancel')
          },
          onConfirm () {
            console.log('plugin confirm')
          }
        })
      }
    }
  }
</script>

<style>
  .withdrawals {
    font-size: 0.32rem;
    color: #888888;
    padding: 0 0.5rem;
  }

  .withdrawals-cash {
    border-bottom: 1px solid #dddddd;
    padding: 0.56rem 0 0.8rem 0.4rem;
    text-align: right;
  }

  .withdrawals-cash-left {
    float: left;
    display: inline-block;

  }

  .withdrawals-cash-left-up {
    font-size: 0.667rem;
    color: #fb3d38;

  }

  .withdrawals-cash-left-down {
    text-align: center;
  }

  .withdrawals-cash-right {
    padding-right: 0.4rem;
  }

  .withdrawals-history {
    text-align: right;
    padding-left: 0.4rem;
  }

  .withdrawals-history-left {
    float: left;
    height: 1rem;
    line-height: 1rem;
  }

  .withdrawals-history-right {
    font-size: 0.427rem;
    font-weight: bold;
    color: #444444;
    padding-right: 0.4rem;
    height: 1rem;
    line-height: 1rem;
  }

  .vux-x-dialog {
    font-size: 16px;
  }
</style>
