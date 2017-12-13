<template>
  <div class="withdrawals">
    <group>
      <cell>
        <div class="withdrawals-title" slot="title">
          <x-img :src="img" :defaultSrc="img"></x-img>
          <div>
            <div class="withdrawals-title-name">{{name}}</div>
            <div class="withdrawals-title-msg">{{msg}}</div>
          </div>
        </div>
      </cell>
    </group>
    <division></division>
    <div class="withdrawals-content">
      <group>
        <cell>
          <div class="withdrawals-content-title-label" slot="title">
            请输入提现金额
          </div>
          <div class="withdrawals-content-title-value" slot="value">手续费0.8元</div>
        </cell>
        <x-input class="withdrawals-content-input" placeholder="请输入提现金额">
          <span slot="label" class="withdrawals-content-rmb">￥</span>
        </x-input>
        <cell>
          <div class="withdrawals-content-money" slot="title">
            <span>可提现余额</span><span>¥16888.86</span>
          </div>
          <div class="withdrawals-content-all" slot="value">
            全部提现
          </div>
        </cell>
      </group>
    </div>
    <div class="withdrawals-button">
      <x-button disabled type="warn">确认提现</x-button>
    </div>
  </div>
</template>

<script>
  import Group from '../../../node_modules/vux/src/components/group/index.vue'
  import Cell from '../../../node_modules/vux/src/components/cell/index.vue'
  import XImg from '../../../node_modules/vux/src/components/x-img/index.vue'
  import Division from '../default/Division.vue'
  import XInput from '../../../node_modules/vux/src/components/x-input/index.vue'
  import XButton from '../../../node_modules/vux/src/components/x-button/index.vue'

  export default {
    components: {
      XButton,
      XInput,
      Division,
      XImg,
      Cell,
      Group
    },
    name: 'Withdrawals',
    data () {
      return {
        img: '/static/images/my/ic_logo_bc.png',
        name: '中国银行',
        msg: '尾号0240 储蓄卡'
      }
    }
  }
</script>

<style>
  .weui-tab {
    background-color: #f1f1f1;
  }

  .withdrawals .weui-cells {
    margin-top: 0;
  }

  .withdrawals .vux-cell-bd p {
    margin: 0;
    text-align: left;
  }

  .withdrawals-title img {
    float: left;
    width: 0.8rem;
    height: 0.8rem;
    padding: 0.25rem 0;
    vertical-align: middle;
  }

  .withdrawals-title > div {
    padding: 0 1.2rem;
  }

  .withdrawals-title-name {
    font-size: 0.427rem;
    font-weight: bold;
    color: #444;
  }

  .withdrawals-title-msg {
    font-size: 0.32rem;
    color: #888;
    padding: 0.1rem 0;
  }

  .withdrawals-content-title-label {
    font-size: 0.427rem;
    font-weight: bold;
    color: #444;
  }

  .withdrawals-content-title-value {
    font-size: 0.32rem;
    color: #bebebe;
  }

  .withdrawals-content-rmb {
    display: inline-block;
    padding: 0 0.1rem;
    font-size: 0.48rem;
    font-weight: bold;
    color: #444;
  }

  .withdrawals-content-input {
    font-size: 0.48rem;
    font-weight: bold;
    color: #444;
    padding: 0.4rem 0.2rem !important;
  }

  .withdrawals-content-money {
    font-size: 0.32rem;
    color: #bebebe;
  }

  .withdrawals-content-all {
    font-size: 0.32rem;
    color: #fb3d38;
  }

  .withdrawals-button {
    padding: 2rem 1.5rem 0 1.5rem;
  }
</style>
