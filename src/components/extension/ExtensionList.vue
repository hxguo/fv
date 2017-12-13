<template>
  <group>
    <cell class="extend-list" v-for="(item, index) in list" :key="item.id">
      <div class="people" slot="title">
        <span>{{index + 1}}</span>
        <img :src="item.img"/>
        <div class="people-info">
          <div class="people-info-name">{{item.name}}</div>
          <div class="people-info-number">推广人数：{{item.number}}</div>
          <div class="people-info-telephone">手机号码：{{item.telephone}}</div>
        </div>
      </div>
      <div v-if="item.status === '1'" slot="value" class="people-complete">
        已完善资料
      </div>
      <div v-if="item.status === '0'" slot="value" class="people-unfinished">
        已完善资料
      </div>
    </cell>
  </group>
</template>

<script>
  import Group from '../../../node_modules/vux/src/components/group/index.vue'
  import Cell from '../../../node_modules/vux/src/components/cell/index.vue'

  export default {
    components: {
      Cell,
      Group
    },
    name: 'ExtensionList',
    data () {
      return {
        list: [
          {
            id: '1',
            name: '眼前的黑不是黑',
            telephone: '18034645664',
            number: '128',
            img: '/static/images/extension/user1.png',
            status: '1'
          },
          {
            id: '2',
            name: 'Clor syi7',
            telephone: '18034645664',
            number: '128',
            img: '/static/images/extension/user2.png',
            status: '1'
          },
          {
            id: '3',
            name: '潇潇洒洒8',
            telephone: '',
            number: '128',
            img: '/static/images/extension/user3.png',
            status: '0'
          },
          {
            id: '4',
            name: '张帅',
            telephone: '18034645664',
            number: '128',
            img: '/static/images/extension/user4.png',
            status: '1'
          },
          {
            id: '5',
            name: '彭鹏啦919',
            telephone: '18034645664',
            number: '128',
            img: '/static/images/extension/user5.png',
            status: '1'
          }
        ]
      }
    }
  }
</script>

<style>
  .weui-cells {
    margin-top: 0 !important;
  }

  .extend-list img {
    float: left;
    width: 1.6rem;
    height: 1.6rem;
    vertical-align: middle;
  }

  .extend-list .vux-cell-bd {
    text-align: left;
  }

  .people span {
    float: left;
    display: inline-block;
    font-size: 0.667rem;
    height: 1.6rem;
    line-height: 1.6rem;
    padding: 0 0.2rem;
  }

  .people-info {
    float: left;
    display: inline-block;
    padding-left: 0.2rem;
  }

  .people-info-name {
    font-size: 0.373rem;
    font-weight: bold;
    color: #444;
    padding-bottom: 0.2rem;
  }

  .people-info-number {
    font-size: 0.32rem;
    color: #888888;
  }

  .people-info-telephone {
    font-size: 0.32rem;
    color: #888888;
  }

  .extend-list p {
    padding: 0;
    margin: 0;
  }

  .people-complete {
    display: inline-block;
    font-size: 0.267rem;
    color: #fff;
    background-color: #f8b551;
  }

  .people-unfinished {
    display: inline-block;
    font-size: 0.267rem;
    color: #fff;
    background-color: #bebebe;
  }
</style>
