import Vue from 'vue'
import App from './App.vue'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import routes from './router/index'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import AppStore from './store/index'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(iView)

const router = new VueRouter({
  routes
})

const store = new Vuex.Store(AppStore)

router.beforeEach((to, before, next) => {
  iView.LoadingBar.start()
  window.document.title = to.meta.title || '数据平台'
  next()
})

router.afterEach(to => {
  iView.LoadingBar.finish()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
