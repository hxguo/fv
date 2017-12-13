<template>
  <div>
    <records-title v-on:tabChange="onTabChange"></records-title>
    <div class="info">{{info}}</div>
    <division></division>
    <records-list v-bind:records="records"></records-list>
  </div>
</template>

<script>
  import RecordsTitle from './RecordsTitle.vue'
  import Division from '../default/Division.vue'
  import RecordsList from './RecordsList.vue'
  import NoRecordsList from './NoRecordsList.vue'

  export default {
    components: {
      NoRecordsList,
      RecordsList,
      Division,
      RecordsTitle
    },
    name: 'Records',
    data () {
      return {
        info: '如对交易失败有疑义，请前往我的页面点击在线查询。',
        records: {
          absTitle: {
            abstract: '申请成功',
            fontSize: 0.373,
            bgColor: '#22ac38'
          },
          infoList: [
            {id: '1', name: '戴大大', identity: '350321199056322224', telephone: '18032394890'},
            {id: '2', name: 'Adi', identity: '350321199056322224', telephone: '18032394890'},
            {id: '3', name: '大风丸', identity: '350321199056322224', telephone: '18032394890'},
            {id: '4', name: '阿尔法', identity: '350321199056322224', telephone: '18032394890'},
            {id: '5', name: '斯蒂芬', identity: '350321199056322224', telephone: '18032394890'}
          ]
        }
      }
    },
    methods: {
      onTabChange: function (index) {
        if (index === 0) {
          this.records.absTitle = {
            abstract: '待确认',
            fontSize: 0.373,
            bgColor: '#facd89'
          }
        }
        if (index === 1) {
          this.records.absTitle = {
            abstract: '待审核',
            fontSize: 0.373,
            bgColor: '#fecb2f'
          }
        }
        if (index === 2) {
          this.records.absTitle = {
            abstract: '申请成功',
            fontSize: 0.373,
            bgColor: '#22ac38'
          }
        }
        if (index === 3) {
          this.records.absTitle = {
            abstract: '关闭',
            fontSize: 0.373,
            bgColor: '#fb3d38'
          }
        }
      }
    },
    created:
      function () {
        this.$root.bus.$emit('showTabbar', false)
      }
  }
</script>

<style>
  .info {
    font-size: 0.32rem;
    color: #bebebe;
    padding: 0.24rem 0.3rem;
    text-align: left;
    background-color: #fff;
  }
</style>
