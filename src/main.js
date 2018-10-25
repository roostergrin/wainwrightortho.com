// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './base/app'

/* eslint-disable-next-line */
import { plugins } from './vendors/vendors'
/* eslint-disable-next-line */
import { fonts } from './vendors/fonts'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
