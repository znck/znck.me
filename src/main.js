import Vue from 'vue'
import App from './App.vue'
import router from './router'

import AppLink from '@/components/AppLink'
import LinkToSelf from '@/components/LinkToSelf'

Vue.component('AppLink', AppLink)
Vue.component('LinkToSelf', LinkToSelf)

Vue.config.devtools = true
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
