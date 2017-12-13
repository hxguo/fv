<template>
  <div>
    <apply-title></apply-title>
    <abstract-title v-bind="absTitle"></abstract-title>
    <div class="apply-base">{{baseInfoNotice}}</div>
    <apply-form></apply-form>
    <division></division>
    <apply-info-list></apply-info-list>
  </div>
</template>

<script>
  import ApplyTitle from './ApplyTitle.vue'
  import AbstractTitle from './AbstractTitle.vue'
  import ApplyForm from './ApplyForm.vue'
  import Division from '../default/Division.vue'
  import ApplyInfoList from './ApplyInfoList.vue'

  export default {
    components: {
      ApplyInfoList,
      Division,
      ApplyForm,
      AbstractTitle,
      ApplyTitle
    },
    name: 'Apply',
    data () {
      return {
        baseInfoNotice: '请务必填写申请人的真实信息。 身份证号码一定要准确，手机号必须能联系到申请人本人。',
        absTitle: {
          abstract: '申请人基本信息',
          fontSize: 0.373
        }
      }
    },
    created: function () {
      this.$root.bus.$emit('showTabbar', false)
    }
  }
</script>

<style>
  .apply-base {
    font-size: 0.32rem;
    padding: 0 0.6rem;
    text-align: left;
  }
</style>
