import Vue from 'vue'
import {
  Loading
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import "../../assets/scss/reset.scss";
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.use(Loading.directive);

Vue.prototype.$loading = Loading.service;

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
