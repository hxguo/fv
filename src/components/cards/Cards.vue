<template>
  <div>
    <template v-if="cards.length > 0">
      <group class="cards" style="">
        <cell v-for="item in cards" :key="item.id" :is-link="true" :link="item.link">
          <img class="card-img" slot="icon" v-bind:src="item.imgUrl"/>
          <div class="card" slot="title">
            <div class="card-name">{{item.name}}</div>
            <div class="card-abstract" v-html="item.abstract"></div>
            <div class="card-hotNum"><img v-bind:src="hotImg"/> {{item.hotNum}}</div>
          </div>
        </cell>
      </group>
    </template>
    <template v-else>
      <div class="search-nothing">
        <div class="search-nothing-img">
          <img :src="noCardsImg">
        </div>
        <div class="search-nothing-words">
          未找到该种类信用卡哦！
        </div>
      </div>
    </template>
  </div>
</template>

<script>
  import Cell from '../../../node_modules/vux/src/components/cell/index.vue'
  import Group from '../../../node_modules/vux/src/components/group/index.vue'

  export default {
    props: ['cards'],
    components: {
      Group,
      Cell
    },
    name: 'Cards',
    data () {
      return {
        hotImg: '/static/images/default/ic_hot.png',
        noCardsImg: '/static/images/cards/ic_search_nothing.png'
      }
    }
  }
</script>

<style scoped>
  .weui-cell {
    padding: 0 0.2rem;
  }
</style>
<style>
  .cards .weui-cells {
    margin-top: 0
  }

  .cards .weui-cells:before {
    border-top: none;
  }

  .card-img {
    width: 2.667rem;
    height: 1.68rem;
  }

  .card {
    padding: 0 0.48rem;
  }

  .card-name {
    text-align: left;
    font-size: 0.48rem;
    font-weight: bold;
    color: rgb(68, 68, 68);
  }

  .card-abstract {
    text-align: left;
    font-size: 0.267rem;
    color: rgb(136, 136, 136);
    padding: 0.09rem 0;
  }

  .card-abstract p {
    padding: 0;
    margin: 0;
  }

  .card-hotNum {
    text-align: left;
    font-size: 0.187rem;
    color: rgb(251, 61, 56);
  }

  .card-hotNum img {
    width: 0.227rem;
    height: 0.267rem;
    vertical-align: top;
  }

  .search-nothing {
    font-size: 16px;
    margin-top: 2rem;
  }

  .search-nothing-img img {
    width: 4.52rem;
    height: 3.08rem;
  }
  .search-nothing-words{
    font-size: 0.426rem;
    font-weight: bold;
    color: #bebebe;
    padding: 0.2rem 0;
  }
</style>
