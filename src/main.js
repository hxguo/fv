// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import { AlertPlugin, ToastPlugin, ConfirmPlugin } from 'vux'

Vue.config.productionTip = false

Vue.use(VueI18n)
Vue.use(VueResource)
Vue.use(AlertPlugin)
Vue.use(ToastPlugin)
Vue.use(ConfirmPlugin)
const i18n = new VueI18n({
  locale: 'en' // 语言标识
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  template: '<App/>',
  components: {App},
  data: {
    bus: new Vue()
  }
})
