<template>
  <popup v-model="show" class="extension" style="height: 4.8rem;">
    <div id="extension">
      <x-img class="situation" :src="situationImg" container="#extension">
      </x-img>
      <x-img class="cooperation" :src="cooperationImg" container="#extension">
      </x-img>
      <x-img class="records" :src="recordsImg" container="#extension">
      </x-img>
    </div>
  </popup>
</template>

<script>
  import Popup from '../../../node_modules/vux/src/components/popup/index.vue'
  import XImg from '../../../node_modules/vux/src/components/x-img/index.vue'

  export default {
    props: ['show'],
    components: {
      XImg,
      Popup
    },
    name: 'Extension',
    data () {
      return {
        situationImg: '/static/images/extension/ic_situation.png',
        cooperationImg: '/static/images/extension/ic_investment_promotion.png',
        recordsImg: '/static/images/extension/ic_record.png'
      }
    }
  }
</script>
<style scoped>
  .extension {
    background-color: transparent;
  }
</style>
<style>
  #extension {
    position: relative;
    left: 50%;
    top: 1.8rem;
    z-index: 1000;
    width: 1.2rem;
    height: 1.2rem;
    margin-left: -0.6rem;
  }

  .situation {
    width: 1.2rem;
    height: 1.2rem;
    position: absolute;
    top: 0;
    left: -1.5rem;
  }

  .cooperation {
    width: 1.2rem;
    height: 1.2rem;
    position: absolute;
    top: -0.9rem;
    left: 0;
  }

  .records {
    width: 1.2rem;
    height: 1.2rem;
    position: absolute;
    top: 0;
    right: -1.5rem;
  }
</style>
