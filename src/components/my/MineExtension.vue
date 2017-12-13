<template>
  <div>
    <extension-title></extension-title>
    <no-extension-list></no-extension-list>
  </div>
</template>

<script>
  import ExtensionTitle from '../extension/ExtensionTitle.vue'
  import NoExtensionList from '../extension/NoExtensionList.vue'

  export default {
    components: {
      NoExtensionList,
      ExtensionTitle
    },
    name: 'MineExtension',
    created: function () {
      this.$root.bus.$emit('showTabbar', false)
    }
  }
</script>

<style>
</style>
