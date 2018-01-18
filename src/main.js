import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
import('vuetify/dist/vuetify.min.css')

Vue.config.productionTip = false

Vue.use(Vuetify)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
