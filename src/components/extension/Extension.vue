<template>
  <div class="extension">
    <extension-title></extension-title>
    <search placeholder="输入您想搜索的商户名" :autoFixed="false"></search>
    <extension-list></extension-list>
  </div>
</template>

<script>
  import ExtensionTitle from './ExtensionTitle.vue'
  import Search from '../../../node_modules/vux/src/components/search/index.vue'
  import ExtensionList from './ExtensionList.vue'
  import NoExtensionList from './NoExtensionList.vue'

  export default {
    components: {
      NoExtensionList,
      ExtensionList,
      Search,
      ExtensionTitle
    },
    name: 'Extension'
  }
</script>
<style scoped>
</style>
<style>

  .extension .weui-search-bar__label {
    background-color: #f1f1f1;
    font-size: 0.381rem;
    border-radius: 5px;
    padding-top: 4px !important;
  }
  .weui-search-bar__box{
    border-radius: 5px;
    background-color: #f1f1f1;
  }
  .weui-search-bar {
    font-size: 0.4rem;
    background-color: #fff !important;
  }

  .weui-search-bar:after {
    border-bottom: none !important;
  }

  .weui-search-bar__form:after {
    border: none !important;
    border-radius: 0 !important;
  }
</style>
