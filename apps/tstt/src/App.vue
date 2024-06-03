<template>
	<NcContent app-name="deck" :class="{ 'nav-hidden': !navShown, 'sidebar-hidden': !sidebarRouterView }">
		<AppNavigation />
		<NcAppContent>
			<router-view />
		</NcAppContent>
	</NcContent>
</template>
<script>
import AppNavigation from './components/navigation/AppNavigation.vue'
export default {
	name: 'App',
	components: {
		AppNavigation
	},
	data() {
	  return {
			loading: false // You can use this to show loading state if needed
	  }
	},
	methods: {
	  // Any methods you want to include
	}
}
</script>
<style scoped lang="scss">
	#app-settings-content {
		p {
		margin-top: 20px;
		margin-bottom: 20px;
		color: var(--color-text-light);
		}
	}
