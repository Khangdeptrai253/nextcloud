import Vue from 'vue'
import Router from 'vue-router'

import AssetPage from './components/AssetPage.vue'
import AuthorPage from './components/AuthorPage.vue'
import OwnerPage from './components/OwnerPage.vue'

Vue.use(Router)

export default new Router({
	linkActiveClass: 'active',
	routes: [
		{
			path: '/',
			name: 'asset',
			component: AssetPage,
		},
		{
			path: '/owner',
			name: 'asset',
			component: OwnerPage,
		},
		{
			path: '/author',
			name: 'asset',
			component: AuthorPage,
		},
	],
})
