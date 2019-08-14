import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import rightMenu from '@/assets/utils/rightmenu';
import ls from "@/assets/utils/ls";
Vue.use(rightMenu);

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
