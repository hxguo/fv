<template>
  <div class="revenue-list">
    <group>
      <cell v-for="(item,index) in list" :key="item.id">
        <div slot="title">
          <div class="revenue-list-item-name">{{item.name}}</div>
          <div class="revenue-list-item-time">{{item.time}}</div>
        </div>
        <div slot="value">
          <div class="revenue-list-item-money">{{item.money}}</div>
          <div class="revenue-list-item-status">
            <span v-if="item.status === 1" style="color:#22ac38">成功</span>
            <span v-if="item.status === 2" style="color:#f6a479">处理中</span>
            <span v-if="item.status === 0" style="color:#fb3d38">关闭</span>
          </div>
        </div>
      </cell>
    </group>
  </div>
</template>

<script>
  import Group from '../../../node_modules/vux/src/components/group/index.vue'
  import Cell from '../../../node_modules/vux/src/components/cell/index.vue'

  export default {
    components: {
      Cell,
      Group
    },
    name: 'RevenueList',
    data () {
      return {
        list: [
          {id: '1', name: '准分润--眼前的黑不是黑', time: '2017-12-01 09:31', money: '-662元', status: 1},
          {id: '2', name: '准分润--Clore Y', time: '2017-11-29 23:19', money: '-8888元', status: 1},
          {id: '3', name: '准分润--富加加+', time: '2017-11-29 23:19', money: '-8888元', status: 2},
          {id: '4', name: '准分润--戴大大', time: '2017-11-29 23:19', money: '-2346元', status: 0},
          {id: '5', name: '准分润--戴大大', time: '2017-11-29 23:19', money: '-2346元', status: 1}
        ]
      }
    }
  }
</script>

<style>

  .revenue-list {
    font-size: 0.267rem;
    color: #bebebe;
  }

  .revenue-list .weui-cells {
    margin-top: 0;
  }

  .revenue-list .vux-cell-bd p {
    margin: 0;
    text-align: left;
  }

  .revenue-list-item-name {
    font-size: 0.373rem;
    font-weight: bold;
    color: #888888;
  }

  .revenue-list-item-time {
    font-size: 0.267rem;
    color: #bebebe;
    padding: 0.1rem;
  }

  .revenue-list-item-money {
    font-size: 0.373rem;
    color: #888888;
  }

  .revenue-list-item-status {
    font-size: 0.293rem;
  }
</style>
