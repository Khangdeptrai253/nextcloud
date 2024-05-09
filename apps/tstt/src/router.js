import Vue from 'vue'
import Router from 'vue-router'
import { generateUrl } from '@nextcloud/router'
import AssetPage from './components/AssetPage.vue'

Vue.use(Router)

export default new Router({
	base: generateUrl('/apps/tstt/'),
	linkActiveClass: 'active',
	routes: [
		{
			path: '/',
			name: 'asset',
			component: AssetPage,
		},
	],
})
