<template>
  <div>
    <tab class="cards-tab">
      <tab-item class="cards-tab-item" @on-item-click="onItemClick">
        <span>{{banksTitle}}</span> <img v-bind:src="imgBanks"/>
      </tab-item>
      <tab-item class="cards-tab-item" @on-item-click="onItemClick">
        <span>{{themesTitle}}</span> <img v-bind:src="imgTheme"/>
      </tab-item>
      <tab-item class="cards-tab-item" @on-item-click="onItemClick">
        <span>{{featuresTitle}}</span> <img v-bind:src="imgFeature"/>
      </tab-item>
    </tab>
    <popup v-model="showBank" position="top">
      <group class="cards-popup">
        <radio :options="banks" :value="9999" @on-change="bankChange"></radio>
      </group>
    </popup>
    <popup v-model="showTheme" position="top">
      <group class="cards-popup">
        <radio :options="themes" :value="9999" @on-change="themeChange"></radio>
      </group>
    </popup>
    <popup v-model="showFeature" position="top">
      <group class="cards-popup">
        <template v-for="item in features">
          <div class="feature" v-if="item.type === 'multi'">
            <group-title>{{item.value}}</group-title>
            <div v-for="option in item.options" class="feature-option"
                 :class="{'feature-option-active': option.isActive}"
                 v-on:click="featureOptionClick(item.key,option.key)">
              {{option.value}}
            </div>
          </div>
          <template v-else>
            <radio :options="item.options" :value="99" @on-change="featureChange"></radio>
          </template>
        </template>
        <div class="feature-button">
          <a v-on:click="featureButtonClick()">确定</a>
        </div>
      </group>
    </popup>
  </div>
</template>

<script>
  import Tab from '../../../node_modules/vux/src/components/tab/tab.vue'
  import TabItem from '../../../node_modules/vux/src/components/tab/tab-item.vue'
  import Popup from '../../../node_modules/vux/src/components/popup/index.vue'
  import Radio from '../../../node_modules/vux/src/components/radio/index.vue'
  import Group from '../../../node_modules/vux/src/components/group/index.vue'
  import GroupTitle from '../../../node_modules/vux/src/components/group-title/index.vue'

  export default {
    components: {
      GroupTitle,
      Group,
      Radio,
      Popup,
      TabItem,
      Tab
    },
    name: 'CardTitle',
    data () {
      return {
        banksTitle: '全部银行',
        themesTitle: '全部主题',
        featuresTitle: '更多',
        imgBanks: '/static/images/cards/btn_off.png',
        imgTheme: '/static/images/cards/btn_off.png',
        imgFeature: '/static/images/cards/btn_off.png',
        imgOff: '/static/images/cards/btn_off.png',
        imgOpen: '/static/images/cards/btn_open.png',
        featureActive: 'feature-active',
        showBank: false,
        showTheme: false,
        showFeature: false,
        banks: [
          {key: '9999', value: '全部银行'},
          {key: '1000', value: '招商银行'},
          {key: '2000', value: '民生银行'},
          {key: '3000', value: '华夏银行'},
          {key: '4000', value: '交通银行'},
          {key: '5000', value: '兴业银行'},
          {key: '6000', value: '光大银行'},
          {key: '7000', value: '浦发银行'},
          {key: '8000', value: '上海银行'}
        ],
        themes: [
          {key: '9999', value: '全部主题'},
          {key: '1000', value: '光大小黄鸭酷黑主题'},
          {key: '2000', value: '光大淘票票公仔联名卡'},
          {key: '3000', value: '中信IHG优悦会联名卡'},
          {key: '4000', value: '交通TESCO乐购普卡'},
          {key: '5000', value: '招商NBA联名卡骑士球队卡'},
          {key: '6000', value: '招商QQ会员联名信用卡'},
          {key: '7000', value: '平安淘宝联名卡炫酷蓝'}
        ],
        features: [
          {
            key: '9999',
            value: '更多',
            type: 'single',
            options: [
              {
                key: '99',
                value: '更多'
              }
            ]
          },
          {
            key: '1000',
            value: '特权',
            type: 'multi',
            options: [
              {key: '10', value: '新户有礼', isActive: false},
              {key: '20', value: '航空保险', isActive: false},
              {key: '30', value: '健康保险', isActive: false},
              {key: '40', value: '机场贵宾服务', isActive: false}
            ]
          },
          {
            key: '2000',
            value: '等级',
            type: 'multi',
            options: [
              {key: '10', value: '普卡', isActive: false},
              {key: '20', value: '金卡', isActive: false},
              {key: '30', value: '银卡', isActive: false},
              {key: '40', value: '白金卡', isActive: false}
            ]
          },
          {
            key: '3000',
            value: '卡面类型（多选）',
            type: 'multi',
            options: [
              {key: '10', value: '简约', isActive: false},
              {key: '20', value: '炫酷', isActive: false},
              {key: '30', value: '清新', isActive: false},
              {key: '40', value: '传统', isActive: false},
              {key: '50', value: '商务', isActive: false},
              {key: '60', value: '卡通', isActive: false},
              {key: '70', value: '时尚', isActive: false}
            ]
          }
        ]
      }
    },
    methods: {
      onItemClick (index) {
        if (index === 0) {
          this.showBank = true
          this.imgBanks = this.imgOpen
          this.showTheme = false
          this.imgTheme = this.imgOff
          this.showFeature = false
          this.imgFeature = this.imgOff
        }
        if (index === 1) {
          this.showBank = false
          this.imgBanks = this.imgOff
          this.showTheme = true
          this.imgTheme = this.imgOpen
          this.showFeature = false
          this.imgFeature = this.imgOff
        }
        if (index === 2) {
          this.showBank = false
          this.imgBanks = this.imgOff
          this.showTheme = false
          this.imgTheme = this.imgOff
          this.showFeature = true
          this.imgFeature = this.imgOpen
        }
      },
      bankChange (index) {
        this.showBank = false
      },
      themeChange (index) {
        this.showTheme = false
      },
      featureChange (index) {
        this.showFeature = false
        for (let f of this.features) {
          if (f.type === 'multi') {
            for (let o of f.options) {
              o.isActive = false
            }
          }
        }
      },
      featureOptionClick (itemKey, optionKey) {
        for (let f of this.features) {
          if (f.key === itemKey) {
            for (let o of f.options) {
              if (o.key === optionKey) {
                if (o.isActive) {
                  o.isActive = false
                } else {
                  o.isActive = true
                }
              }
            }
          }
        }
      },
      featureButtonClick () {
        this.showFeature = false
      }
    }
  }
</script>
<style scoped>
  .vux-tab .vux-tab-item.vux-tab-selected {
    color: #fb3d38;
    border-bottom: 3px solid #fb3d38;
  }

  .cards-tab {
    height: 1.2rem;
    background: #1b1b1b;
    z-index: 502;
  }

  .cards-tab .cards-tab-item {
    font-size: 0.45rem;
    color: #fff;
    background: none;
    line-height: 1.2rem;
  }

  .weui-cells__title {
    text-align: left;
    font-size: 0.427rem;
    font-weight: bold;
    color: #444444;
    padding: 0;
    margin: 0;
  }

  .feature {
    text-align: left;
    padding: 0 0.5rem 0.3rem 0.5rem;
  }

  .feature-option {
    display: inline-block;
    font-size: 0.32rem;
    color: #888888;
    padding: 0.2rem 0.4rem;
    margin: 0.14rem 0.25rem;
    border: 1px solid #dddddd;
    text-decoration: none;
  }

  .feature-option-active {
    color: #fb3d38;
    border: 1px solid #fb3d38;
  }

  .feature-button {
    font-size: 0.373rem;
    padding: 0 0 0.3rem 0;
  }

  .feature-button a {
    display: inline-block;
    color: #fff;
    background-color: #fb3d38;
    padding: 0.16rem 0.7rem;
  }
</style>
<style>
  .cards-tab .vux-tab-ink-bar {
    background-color: #fb3d38;
  }

  .cards-popup .weui-cell {
    padding: 0.3rem 0.5rem;
    text-align: left;
  }

  .cards-tab-item img {
    width: 0.2rem;
    height: 0.147rem;
    vertical-align: middle;
  }

  .cards-popup {
    margin-top: 1.2rem;
  }

  .cards-popup p {
    font-size: 0.48rem;
    line-height: 0.5rem;
    -webkit-margin-before: 0;
    -webkit-margin-after: 0;
  }
</style>
