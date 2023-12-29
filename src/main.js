import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import Loading from 'vue3-loading-overlay'
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import { currency, date, round } from './methods/filters'
import $httpMessageState from './methods/pushMessageState'

const app = createApp(App)
// 全域用法
// 如果全局属性與组件自己的属性衝突，组件自己的属性将具有更高的優先級
// $filters為自己定義的，錢字號可加可不加
app.config.globalProperties.$filters = {
  currency,
  date,
  round
}
app.config.globalProperties.$httpMessageState = $httpMessageState

app.use(VueAxios, axios)
app.use(router)
app.component('LoadingComponent', Loading)
app.mount('#app')
