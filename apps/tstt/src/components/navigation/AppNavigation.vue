<template>
	<NcAppNavigation :class="{ 'icon-loading': loading }">
		<template #list>
			<NcAppNavigationItem :title="t('deck', 'Asset Management')" :exact="true" to="/" />
			<NcAppNavigationItem :title="t('deck', 'Author Management')" :exact="true" to="/author" />
			<NcAppNavigationItem :title="t('deck', 'Owner Management')" :exact="true" to="/owner" />
		</template>
	</NcAppNavigation>
</template>

<script>
import NcAppNavigation from '@nextcloud/vue/dist/Components/NcAppNavigation.js'
import NcAppNavigationItem from '@nextcloud/vue/dist/Components/NcAppNavigationItem.js'
export default {
	name: 'AppNavigation',
	components: {
		NcAppNavigation,
		NcAppNavigationItem,
	},
	data() {
		return {
			navigationItems: [
				{ label: 'Asset Management', link: '/asset', icon: 'fas fa-file-alt' },
				{ label: 'Author Management', link: '/author', icon: 'fas fa-clock' },
				{ label: 'Owner Management', link: '/owner', icon: 'fas fa-heart' },

			],
		}
	},
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
</style>
