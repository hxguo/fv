<template>
  <div class="details">
    <fv-title v-bind="baseTitle"></fv-title>
    <group class="details">
      <cell primary="content" class="details-item" v-for="(item , index) in baseInfo" :key="index" :title="item.label"
            :value="item.value">
      </cell>
    </group>
    <fv-title v-bind="featureTitle"></fv-title>
    <group class="details">
      <cell class="details-item item-left" v-for="(item , index) in featureInfo" :key="index" :title="(index + 1)+'.'+item">
      </cell>
    </group>
    <fv-title v-bind="activityTitle"></fv-title>
    <group class="details">
      <cell class="details-item item-left" v-for="(item, index) in activityInfo" :key="index" :title="(index + 1)+'.'+item">
      </cell>
    </group>
  </div>
</template>

<script>
  import FvTitle from '../default/FvTitle.vue'
  import Group from '../../../node_modules/vux/src/components/group/index.vue'
  import Cell from '../../../node_modules/vux/src/components/cell/index.vue'

  export default {
    components: {
      Cell,
      Group,
      FvTitle
    },
    name: 'DetailsContent',
    data () {
      return {
        baseTitle: {
          title: '基本信息',
          titleRight: ''
        },
        featureTitle: {
          title: '卡片特点',
          titleRight: ''
        },
        activityTitle: {
          title: '活动详情',
          titleRight: ''
        },
        baseInfo: [
          {label: '等 级', value: '金卡'},
          {label: '币 种', value: '人民币'},
          {label: '发卡组织', value: '银联'},
          {label: '免息期限', value: '最短20天，最长56天'},
          {label: '积分规则', value: '普卡，金卡消费1元累计1积分，生日月消费1元累计2积分'}
        ],
        featureInfo: [
          '新户首刷有机会得50元刷卡金',
          '新客户首刷就送小黄鸭限量版潮包',
          '屈臣氏满120减40'
        ],
        activityInfo: [
          '首年免年费',
          '10元看大片、享汉堡王套餐',
          '味千拉面满88元立减35元'
        ]
      }
    }
  }
</script>

<style scoped>
  .details-item {
    font-size: 0.373rem;
    padding: 4px 15px;
  }

  .details-item:before, .details-item:after {
    border: none;
  }

</style>
<style>
  .details {
    font-size: 0.373rem;
    margin-top: 15px;
  }

  .details .weui-cells:before, .details .weui-cells:after {
    border: none;
  }

  .details .weui-cells {
    margin-top: 0;
  }

  .details-item p {
    margin: 0;
  }

  .details-item .vux-cell-bd {
    width: 1.6rem;
    font-size: 0.32rem;
    color: #888888;
  }

  .details-item .weui-cell__ft {
    font-size: 0.32rem;
    text-align: left;
    padding: 0 0.2rem;
    color: #444444;
  }

  .item-left .vux-cell-bd{
    text-align: left;
  }
</style>
