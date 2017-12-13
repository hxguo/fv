<template>
  <div>
    <grid class="mine-menu" :cols="4">
      <grid-item v-for="(item,index) in menus" :key="item.id" :link="item.link" @click.native="onGridItemClick">
        <div class="mine-menu-img">
          <x-img :src="item.img" :defaultSrc="item.img"></x-img>
        </div>
        <div>{{item.name}}</div>
      </grid-item>
    </grid>
    <popup v-model="showCustom" position="top" is-transparent>
      <div class="custom">
        <div class="custom-name">
          <x-img :src="imgCustom" :defaultSrc="imgCustom"></x-img>
          <div>客服小裴</div>
        </div>
        <div class="custom-wx">
          <x-img :src="imgWx" :defaultSrc="imgWx"></x-img>
          <div>Lonely_loser_</div>
        </div>
        <div class="custom-qq">
          <x-img :src="imgQQ" :defaultSrc="imgQQ"></x-img>
          <div>3464228559</div>
        </div>
        <div class="custom-phone">
          <x-img :src="imgPhone" :defaultSrc="imgPhone"></x-img>
          <div>15305929481</div>
        </div>
      </div>
    </popup>
  </div>
</template>

<script>
  import Grid from '../../../node_modules/vux/src/components/grid/grid.vue'
  import GridItem from '../../../node_modules/vux/src/components/grid/grid-item.vue'
  import XImg from '../../../node_modules/vux/src/components/x-img/index.vue'
  import Popup from '../../../node_modules/vux/src/components/popup/index.vue'

  export default {
    components: {
      Popup,
      XImg,
      GridItem,
      Grid
    },
    name: 'MineMenu',
    data () {
      return {
        menus: [
          {id: '1', name: '推荐人', img: '/static/images/my/ic_referrer.png', link: '/my/minereferee'},
          {id: '2', name: '结算卡', img: '/static/images/my/ic_bank_card.png', link: '/my/minecards'},
          {id: '3', name: '我的推广', img: '/static/images/my/ic_promote.png', link: '/my/mineextension'},
          {id: '4', name: '文案库', img: '/static/images/my/ic_document.png', link: ''},
          {id: '5', name: '公告信息', img: '/static/images/my/ic_news.png', link: ''},
          {id: '6', name: '在线客服', img: '/static/images/my/ic_customer.png', link: ''},
          {id: '7', name: '关于我们', img: '/static/images/my/ic_about_us.png', link: '/my/aboutus'},
          {id: '8', name: '退出登录', img: '/static/images/my/ic_quit.png', link: ''}
        ],
        showCustom: false,
        imgCustom: '/static/images/my/ic_customer_service.png',
        imgWx: '/static/images/my/ic_wechat.png',
        imgQQ: '/static/images/my/ic_qq.png',
        imgPhone: '/static/images/my/ic_phone.png'
      }
    },
    methods: {
      onGridItemClick (index) {
        if (index === '8') {
          this.$vux.confirm.show({
            title: '提示',
            content: '您确认要退出当前登录？.',
            confirmText: '确定',
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
  }
</script>

<style>
  .mine-menu {
    font-size: 0.32rem;
    color: #444444;
  }

  .mine-menu a {
    color: #444444;
    text-decoration: none;
  }

  .mine-menu .weui-grid:before, .mine-menu .weui-grid:after {
    border: none;
  }

  .mine-menu-img {
    text-align: center;
    padding-bottom: 0.12rem;
  }

  .mine-menu-img img {
    width: 0.56rem;
    height: 0.56rem;
  }

  .custom {
    position: relative;
    background-color: #fff;
    width: 5.33rem;
    height: 4.8rem;
    margin: 4.8rem auto 0 auto;
    border-radius: 5px;
  }

  .custom .custom-name {
    position: absolute;
    top: -1rem;
    left: 50%;
    margin-left: -0.873rem;
  }

  .custom .custom-name img {
    width: 1.747rem;
    height: 1.733rem;
  }

  .custom .custom-name div {
    font-size: 0.363rem;
    color: #888;
  }

  .custom-wx, .custom-qq, .custom-phone {
    clear: left;
    font-size: 0.32rem;
    color: #444444;
    margin: 0.2rem 1rem;
    padding-bottom: 0.213rem;
    border-bottom: 1px solid #dddddd;
  }

  .custom-wx img, .custom-qq img, .custom-phone img {
    float: left;
    width: 0.553rem;
    height: 0.427rem;
  }

  .custom-wx {
    padding-top: 2rem;
  }
</style>
