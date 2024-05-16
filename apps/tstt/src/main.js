import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import Vuex from 'vuex'
import store from './store/asset.js'
<<<<<<< HEAD
import PortalVue from 'portal-vue'

Vue.mixin({ methods: { t, n } })
Vue.use(Vuex)
Vue.use(PortalVue)

export default new Vue({ router, el: '#tstt', render: h => h(App), store })
=======
import PortalVue from 'portal-vue';

<<<<<<< HEAD
export default new Vue({ router, el: '#tstt', render: h => h(App) })
=======
Vue.mixin({ methods: { t, n } })
Vue.use(Vuex)
Vue.use(PortalVue);

export default new Vue({ router, el: '#tstt', render: h => h(App), store })
>>>>>>> 278e4893 ([1] Asset Management)
>>>>>>> 754af851 ([1] Asset Management)
