import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import rightMenu from '@/assets/utils/rightmenu'
import move from '@/assets/utils/move'
import ls from "@/assets/utils/ls"
import Window from '@/components/Window'
Vue.use(rightMenu)
Vue.use(move)
Vue.component('Window',Window)

Vue.config.productionTip = false

Vue.prototype.$ls = ls
// Vue.mixin({
//   methods:{
//     lget
//   }
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
