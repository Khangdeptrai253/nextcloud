import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
Vue.mixin({ methods: { t, n } })

export default new Vue({ router, el: '#tstt', render: h => h(App) })
