<template>
  <div class="extension-title">
    <div class="level1">
      <div class="level1-value">6282</div>
      <div class="level-title">我的商户(人)</div>
    </div>
    <div class="level2">
      <div class="level2-left">
        <div class="level2-value">368</div>
        <div class="level-title">今日新增(人)</div>
      </div>
      <div class="level2-right">
        <div class="level2-value">362582.0</div>
        <div class="level-title">今日访卡数量(张)</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ExtensionTitle'
  }
</script>

<style>
  .extension-title {
    font-size: 0.533rem;
    color: #fb3d38;
    width: 10rem;
    height: 4rem;
    background-color: #1b1b1b;
  }

  .level-title {
    font-size: 0.267rem;
    color: #fff;
  }

  .level1 {
    height: 2rem;
  }

  .level2 {
    height: 2rem;
  }

  .level1-value {
    padding-top: 1rem;
  }

  .level2-value {
    padding-top: 0.5rem;
  }

  .level2-left {
    float: left;
    display: inline-block;
    width: 50%;
  }

  .level2-right {
    display: inline-block;
    width: 50%;
  }
</style>
