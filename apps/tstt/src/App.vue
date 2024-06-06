<template>
	<NcContent style="margin-top: 0;"
		app-name="tstt"
		:class="{ 'nav-hidden': !navShown, 'sidebar-hidden': !sidebarRouterView }">
		<AppNavigation />
		<NcAppContent>
			<router-view />
		</NcAppContent>
	</NcContent>
</template>

<script>
import NcAppContent from '@nextcloud/vue/dist/Components/NcAppContent.js'
import NcContent from '@nextcloud/vue/dist/Components/NcContent.js'

import AppNavigation from './components/navigation/AppNavigation.vue'
export default {
	name: 'App',
	components: {
		NcAppContent,
		AppNavigation,
		NcContent,
	},

}
</script>
<style scoped lang="scss">
#tstt {
	display: flex;
	justify-content: center;
}

#content-vue {
	#app-content {
		transition: margin-left 100ms ease;
		position: relative;
		overflow-x: hidden;
		align-items: stretch;
	}

	.content {
		margin-top: 0 !important
	}

	#app-sidebar {
		transition: max-width 100ms ease;
	}

	&.nav-hidden {
		#app-content {
			margin-left: 0;
		}
	}

	&.sidebar-hidden {
		#app-sidebar {
			max-width: 0;
			min-width: 0;
		}
	}
}
</style>
