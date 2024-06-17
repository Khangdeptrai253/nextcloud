import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import Vuex from 'vuex'
import store from './store/asset.js'
import PortalVue from 'portal-vue'

Vue.mixin({ methods: { t, n } })
Vue.use(Vuex)
Vue.use(PortalVue)

export default new Vue({ router, el: '#tstt', render: h => h(App), store })
